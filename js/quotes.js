const songs = [
    {
        song: 'Ditto',
        singer: 'NewJeans'
    },
    {
        song: '사건의 지평선',
        singer: '윤하(YOUNHA)'
    },
    {
        song: 'ANTIFRAGILE',
        singer: 'LE SSERAFIM(르세라핌)'
    },
    {
        song: 'After LIKE',
        singer: 'IVE(아이브)'
    },
    {
        song: 'Destiny(나의 지구)',
        singer: 'LOVELYZ(러블리즈)'
    },
    {
        song: '너의 모든 순간',
        singer: '성시경'
    },
    {
        song: 'Shut Down',
        singer: 'BLACKPINK'
    },
    {
        song: 'Nxde',
        singer: '(여자)아이들'
    },
    {
        song: '이제 나만 믿어요',
        singer: '임영웅'
    },
    ];
const songTD = document.querySelector("#todaySong span:last-child");

const todaysSong = songs[Math.floor(Math.random() * songs.length)];

songTD.innerText = `${todaysSong.song} - ${todaysSong.singer}`;