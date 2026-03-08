const videos = [
{
title:"ليه اختار ايمن عباس؟",
channel:"Youssef Bsheer",
views:"85 مشاهدة",
time:"قبل ساعة",
duration:"1:14:53",
thumb:"https://picsum.photos/500/300?1",
avatar:"https://i.pravatar.cc/100?img=1"
},

{
title:"حياتك شبه القهوة",
channel:"Khaled Sakr",
views:"10 ألف مشاهدة",
time:"قبل 3 ساعات",
duration:"6:32",
thumb:"https://picsum.photos/500/300?2",
avatar:"https://i.pravatar.cc/100?img=2"
},

{
title:"السجن الرقمي",
channel:"عشوائيات",
views:"123 ألف مشاهدة",
time:"قبل شهر",
duration:"13:41",
thumb:"https://picsum.photos/500/300?3",
avatar:"https://i.pravatar.cc/100?img=3"
},

{
title:"كيف انهارت كوداك",
channel:"Mohammad Youssef",
views:"56 ألف مشاهدة",
time:"قبل 9 أشهر",
duration:"17:32",
thumb:"https://picsum.photos/500/300?4",
avatar:"https://i.pravatar.cc/100?img=4"
},

{
title:"امبراطورية مطاعم",
channel:"Eqtsadia",
views:"770 ألف مشاهدة",
time:"قبل سنة",
duration:"22:02",
thumb:"https://picsum.photos/500/300?5",
avatar:"https://i.pravatar.cc/100?img=5"
},

{
title:"شارك تانك مصر",
channel:"Shark Tank Egypt",
views:"220 ألف مشاهدة",
time:"قبل سنتين",
duration:"37:14",
thumb:"https://picsum.photos/500/300?6",
avatar:"https://i.pravatar.cc/100?img=6"
}
];


const container = document.getElementById("videos");

videos.forEach(video => {

const card = document.createElement("div");
card.className = "video-card";

card.innerHTML = `
<div class="thumbnail">
<img src="${video.thumb}">
<div class="duration">${video.duration}</div>
</div>

<div class="video-info">

<img class="channel-img" src="${video.avatar}">

<div class="video-text">
<div class="video-title">${video.title}</div>
<div class="video-meta">${video.channel}</div>
<div class="video-meta">${video.views} • ${video.time}</div>
</div>

</div>
`;

container.appendChild(card);

});
