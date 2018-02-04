import * as actions from 'actions';

const initialState = {
  data: [
    { message: 'この曲いいね', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
    { message: 'めっちゃ元気出た', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
    { message: 'レコチョクでもこれ聴いた', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },
    { message: 'MusicHackDayにぴったり', image: 'http://i.scdn.co/image/18135ba644f8b8a624e8d33247db906c457e62ef', id: 'spotify:track:5MChi9fdCbTIWDJPPUuuW6' },
    { message: 'この曲はなんだか青春時代を思い出します', image: 'http://i.scdn.co/image/e1db6e096c44595aa8bb778339c4ce813c4d3884', id: 'spotify:track:6xolPSoBWkzOnK28TAOKRx' },
    { message: '明日は月曜日だけど、、、これ聴いて頑張ります', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' },  
    { message: '今日も1日がんばるぞい', image: 'http://i.scdn.co/image/d8ad6363ac1c6912369fbeb3b6efff419beec4d1', id: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr' }, 
        { message: '受験の時によく聴いていました。', image: 'https://i.scdn.co/image/7c3ec33d478f5f517eeb5339c2f75f150e4d601e', id: 'spotify:album:4OHNH3sDzIxnmUADXzv2kT' },
    { message: '昔よく聴いていました。', image: 'https://i.scdn.co/image/fd8788850ddc77e4f5a48150b69b48c1b814b2dc', id: 'spotify:album:47vqEL1Q8fVtDuyRoQWbaX' },
    { message: '冬になると聴きたくなります。', image: 'https://i.scdn.co/image/74f54aadf611d94fb507c8f6a5ce654e1d40b305', id: 'spotify:artist:3vVDusnDA0LcPH3NvZpoyM' },
    { message: 'めっちゃ好きです。', image: 'https://i.scdn.co/image/470ee67213607715f6fb7e4bcb229c361ae1544d', id: 'spotify:album:0iMiaI1eFEpssUtEOw9Pia' },
    { message: '休日によく聴いています。', image: 'https://i.scdn.co/image/0008860272c2df10edd53afef9d6fbf87ce6b6ed', id: 'spotify:album:43YgVT9S2zswxoEXaxPgfm' },
    { message: '聞くとテンション上がります。', image: 'https://i.scdn.co/image/e4f2882dbb49aa5fb237be5fd27e151ea37324f6', id: 'spotify:artist:06HL4z0CvFAxyc27GXpf02' },
  ],
};

export default function pageState(state = initialState, action) {
  switch (action.type) {
    case actions.TIMELINE_DATA_ADD:
      return { data: [ action.payload, ...state.data ] };
    default:
      return state;
  }
}
