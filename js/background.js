const images = [
    "https://i.pinimg.com/originals/85/22/50/852250e8aa70a9d0e983372b642058cd.jpg",
    "https://t1.daumcdn.net/cfile/tistory/2305624B58C6C74B18",
    "https://mblogthumb-phinf.pstatic.net/MjAxODAyMDRfMjM3/MDAxNTE3Njc2ODc4MTI3.lNuPv5-N9JtO7ClKXTmwMWPMUQxjoALWFvBLrryj4qcg.JC4r6CfGfuzlheSA79KdXDoVTMli9LeXv_stOMsWCpog.PNG.d_hye97/8948956.png?type=w800",
    "https://t1.daumcdn.net/cfile/tistory/2736AF3457EFC67229?original",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);