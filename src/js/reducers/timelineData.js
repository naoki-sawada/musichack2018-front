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
