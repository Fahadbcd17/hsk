from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
import json,pymupdf
ROOT=Path(__file__).resolve().parents[2]
import os
os.chdir(ROOT)
document=pymupdf.open("HSK-3-standard-course-pdf.pdf")
pages=[17,27,36,45,53,62,71,80,88,97,106,114,123,132,141,151,159,167,175,184]
ys=[(.300,.483),(.302,.486),(.319,.502),(.300,.483),(.308,.491),(.312,.496),(.306,.489),(.314,.495),(.318,.582),(.304,.488),(.320,.503),(.322,.505),(.296,.478),(.318,.500),(.300,.482),(.304,.486),(.297,.492),(.303,.500),None,(.319,.503)]
out=Path('assets/hsk3-pictures');out.mkdir(exist_ok=True);meta={};thumbs=[]
for ch,(page,rows)in enumerate(zip(pages,ys),1):
 pix=document[page-1].get_pixmap(matrix=pymupdf.Matrix(3,3));im=Image.frombytes('RGB',[pix.width,pix.height],pix.samples);w,h=im.size;items=[]
 if ch==19:
  boxes=[('face',(.36*w,.215*h,.73*w,.545*h))]
 else:boxes=[(str(i+1)if ch==9 else chr(65+i),(x*w,rows[i//3]*w,(x+.245)*w,(rows[i//3]+.16)*w))for i,x in enumerate([.20,.46,.70]*2)]
 if ch==20:boxes=[(chr(65+i),(x*w,y*w,(x+width)*w,(y+.153)*w))for i,(x,width,y)in enumerate([(.23,.23,.317),(.56,.155,.317),(.815,.155,.317),(.23,.23,.500),(.56,.155,.500),(.815,.155,.500)])]
 if ch in [15,17]:
  xs=[.19,.438,.684]if ch==15 else [.20,.45,.695]
  boxes=[(label,(xs[i%3]*w,box[1],(xs[i%3]+.245)*w,box[3]))for i,(label,box)in enumerate(boxes)]
 if ch==16:boxes=[(label,(box[0],box[1],box[2],(.478*w if i<3 else box[3])))for i,(label,box)in enumerate(boxes)]
 if ch in [3,9]:boxes=[(label,(box[0],box[1],min(w,box[2]+.008*w),box[3]))for label,box in boxes]
 for label,box in boxes:
  box=tuple(map(round,box));crop=im.crop(box);name=f'chapter-{ch:02}-{label}.webp';crop.save(out/name,quality=90)
  items.append(dict(image=str(out/name),width=crop.width,height=crop.height,sourceRect=box))
  thumb=Image.new('RGB',(250,190),'white');thumb.paste(ImageOps.contain(crop,(250,165)),(0,25));ImageDraw.Draw(thumb).text((4,4),f'{ch} / {label}',fill='black');thumbs.append(thumb)
 meta[str(ch)]=items
Path('tools/hsk3/images.json').write_text(json.dumps(meta,indent=2))
for k in range(0,len(thumbs),24):
 batch=thumbs[k:k+24];sheet=Image.new('RGB',(1500,190*((len(batch)+5)//6)), '#ddd')
 for j,t in enumerate(batch):sheet.paste(t,((j%6)*250,(j//6)*190))
 sheet.save(f'/tmp/hsk3-crops-{k//24}.jpg')
