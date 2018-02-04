import * as actions from 'actions';

const initialState = {
  data: [
    { message: 'MusicHackDayにぴったり', image: 'http://i.scdn.co/image/18135ba644f8b8a624e8d33247db906c457e62ef', id: 'spotify:track:5MChi9fdCbTIWDJPPUuuW6' },
    { message: 'この曲はなんだか青春時代を思い出します', image: 'http://i.scdn.co/image/e1db6e096c44595aa8bb778339c4ce813c4d3884', id: 'spotify:track:6xolPSoBWkzOnK28TAOKRx' },
    { message: '受験の時によく聴いていました。', image: 'http://i.scdn.co/image/ac68a9e4a867ec3ce8249cd90a2d7c73755fb487', id: 'spotify:album:4OHNH3sDzIxnmUADXzv2kT' },
    { message: '昔よく聴いていました。', image: 'http://i.scdn.co/image/b8a2e08d620210b339af53c4532647874f13a408', id: 'spotify:album:47vqEL1Q8fVtDuyRoQWbaX' },
    { message: '冬になると聴きたくなります。', image: 'https://i.scdn.co/image/74f54aadf611d94fb507c8f6a5ce654e1d40b305', id: 'spotify:artist:3vVDusnDA0LcPH3NvZpoyM' },
    { message: 'めっちゃ好きです。', image: 'http://i.scdn.co/image/80bd0a69e567a8d68aa977e066a27e6fee90119c', id: 'spotify:album:0iMiaI1eFEpssUtEOw9Pia' },
    { message: '休日によく聴いています。', image: 'http://i.scdn.co/image/671600394ccdc8625642a800657dea4fa0532927', id: 'spotify:album:43YgVT9S2zswxoEXaxPgfm' },
    { message: '聞くとテンション上がります。', image: 'http://i.scdn.co/image/554238e93321e852afbe8b81b6018bac3375e97d', id: 'spotify:artist:06HL4z0CvFAxyc27GXpf02' },
    { message: 'よく聞く曲', image: 'http://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c', id: 'spotify:track:7qiZfU4dY1lWllzX7mPBI3' },
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
