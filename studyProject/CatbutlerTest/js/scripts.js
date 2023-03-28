function start() {
  $('.start').hide();
  $('.question').show();
  next();
}
var num = 1;
let total = '';
let maxKey;
let final;
var q = {
  1: {
    title: '나의 다리를 문지른다..!',
    A: '고양이가 관심을 끌려고 한다',
    B: '고양이는 냄새로 나를 표시하고 있다',
    C: '고양이가 음식을 요구하고 있다',
    D: '고양이가 인사를 한다',
    E: '고양이가 놀려고 한다',
  },
  2: {
    title: '쓸데없이 가구를 긁는다',
    A: '고양이가 발톱을 갈고 있다',
    B: ' 고양이가 가구에 냄새를 표시하려고 한다',
    C: '고양이가 관심을 끌려고 한다',
    D: '고양이는 지루하고 할 일을 찾고 있다',
    E: '고양이가 근육을 스트레칭하려고 한다',
  },
  3: {
    title: '나한테 야옹거리기 시작한다',
    A: '고양이가 배고프다.',
    B: '고양이는 지루하고 할 일을 찾고 있다',
    C: '고양이는 나를 보고 기뻐한다',
    D: '고양이가 나와 의사소통을 시도하고 있다 ',
    E: '고양이가 아프거나 불편한다',
  },
  4: {
    title: '나를 핥아준다',
    A: '고양이는 동료 고양이처럼 나를 그루밍하고 있다',
    B: '고양이가 애정을 표현하고 있다',
    C: '고양이는 배고프고 나를 맛보길 원한다',
    D: '고양이는 자신의 냄새로 나를 표시하려고 한다',
    E: '고양이가 나에게 무언가를 전달하려고 한다',
  },
  5: {
    title: '갑자기 등을 구부리고 털이 곤두섰다..!',
    A: '고양이가 겁을 먹거나 위협을 받고 있다',
    B: '고양이가 놀 준비를 하고 있다',
    C: '고양이는 행복하고 편안하다',
    D: '고양이는 우위를 주장하려고 한다',
    E: '고양이가 아프거나 불편한다',
  },
  6: {
    title: '가구 밑이나 좁은 공간에 숨는다',
    A: '고양이가 무서워하거나 불안해한다',
    B: '고양이는 잠을 잘 수 있는 아늑한 은신처를 찾으려고 노력하고 있다',
    C: '고양이는 장난기를 느끼고 나를 놀라게 하고 싶어한다',
    D: '고양이가 독립성을 주장하려고 한다',
    E: '고양이가 건강 문제를 겪고 있다',
  },
  7: {
    title: '그르렁그르렁 거린다',
    A: '고양이는 행복하고 만족한다',
    B: '고양이가 나와 의사소통을 시도하고 있다',
    C: '고양이가 아프거나 불편한다',
    D: '고양이는 자신의 우위를 주장하려고 한다',
    E: '고양이가 다른 동물을 위협하려고 한다',
  },
  8: {
    title: '꾹꾹이를 시전했다..!',
    A: '고양이는 행복하고 만족한다',
    B: '고양이는 자신의 냄새로 나를 표시하려고 한다',
    C: '고양이가 애정을 표현하려고 한다',
    D: '고양이는 우위를 주장하려고 한다',
    E: '고양이가 스트레스를 받거나 불안해한다',
  },
  9: {
    title: '꼬리를 앞뒤로 빠르게 흔들기 시작했다',
    A: '고양이는 장난기를 느끼고 있다',
    B: '고양이가 화를 내거나 짜증을 낸다',
    C: '고양이가 아프거나 불편한다',
    D: '고양이가 나와 의사소통을 시도하고 있다',
    E: '고양이가 긴장하거나 불안해한다',
  },
  10: {
    title: '갑자기 죽은 쥐를 가져왔다..',
    A: '고양이가 선물을 가져오고 있다',
    B: '고양이가 애정을 표현하려고 한다',
    C: '고양이가 관심을 끌려고 한다',
    D: '고양이가 건강 문제를 겪고 있다',
    E: '고양이는 자신의 지배력을 주장하려고 한다',
  },
};
let result = {
  A: {
    rank: '초보 고양이 집사',
    explain: '고양이의 행동에 대한 기본적인 이해가 어느 정도 있지만 개선의 여지가 있습니다.',
    img: 'E.png',
  },
  B: {
    rank: '중급 고양이 집사',
    explain: '고양이의 행동을 잘 이해하고 있으며 신호를 잘 해석할 수 있습니다.',
    img: 'D.png',
  },
  C: {
    rank: '고양이 따까리',
    explain: '당신은 고양이의 행동을 깊이 이해하고 고양이의 필요와 욕구를 예측할 수 있습니다.',
    img: 'C.png',
  },
  D: {
    rank: '고양이 친구',
    explain: '당신은 고양이의 행동을 철저히 이해하고 있으며 고양이와 효과적으로 의사소통할 수 있습니다.',
    img: 'B.png',
  },
  E: {
    rank: '고양이 마스터',
    explain:
      '당신은 고양이의 행동을 탁월하게 이해하고 있으며 장난스럽고 자극적인 방식으로 고양이와 교감할 수 있습니다.',
    img: 'A.png',
  },
  F: { rank: '고양이 박사', explain: '당신은 고양이를 키울자격이 있습니다', img: 'F.png' },
};

var btn_list = [
  "<button id='A' type='button' class='btn btn-outline-light mt-3 option-btn'>...</button>",
  "<button id='B' type='button' class='btn btn-outline-light mt-3 option-btn'>...</button>",
  "<button id='C' type='button' class='btn btn-outline-light mt-3 option-btn'>...</button>",
  "<button id='D' type='button' class='btn btn-outline-light mt-3 option-btn'>...</button>",
  "<button id='E' type='button' class='btn btn-outline-light mt-3 option-btn'>...</button>",
];

const opt = document.querySelector('.option');
let option_btn = document.querySelectorAll('.option-btn');

opt.addEventListener('click', e => {
  if (!e.target.className.includes('d-grid')) {
    total += e.target.id;
    console.log(total);
    next();
  }
});

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  let sum = '';
  for (let i of btn_list) {
    sum += i;
  }
  opt.innerHTML = sum;
}

function next() {
  if (num == 11) {
    const total_list = total.split('');
    DuplicateCheck(total_list);
    const M = maxKey + '';
    console.log(M);
    console.log(M.length);

    if ('A' == M) final = 'A';
    if ('B' == M) final = 'B';
    if ('C' == M) final = 'C';
    if ('D' == M) final = 'D';
    if ('E' == M) final = 'E';
    if (M.length > 1) {
      if (maxKey.includes('A') && maxKey.includes('B')) {
        final = 'B';
      } else if (maxKey.includes('B') && maxKey.includes('C')) {
        final = 'C';
      } else if (maxKey.includes('C') && maxKey.includes('D')) {
        final = 'D';
      } else if (maxKey.includes('D') && maxKey.includes('E')) {
        final = 'E';
      } else {
        final = 'F';
      }
    }
    console.log('1' + maxKey);
    console.log('2' + final);
    $('.question').hide();
    $('.loader').show();
    setTimeout(() => {
      $('.loader').hide();
      $('.result').show();
      $('#img').attr('src', `./assets/img/${result[final]['img']}`);
      $('#rank').html(result[final]['rank']);
      $('#explain').html(result[final]['explain']);
    }, 2000);
  } else {
    shuffle(btn_list);
    $('.progress-bar').attr('style', `width: calc(100/10*${num}%)`);
    $('#title').html(q[num]['title']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    $('#C').html(q[num]['C']);
    $('#D').html(q[num]['D']);
    $('#E').html(q[num]['E']);
    num++;
  }
}

function DuplicateCheck(total_list) {
  total = total_list.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  console.log(total);
  maxKey = Object.keys(total).reduce((max, key) => {
    if (max.length === 0 || total[key] > total[max[0]]) {
      return [key];
    }
    if (total[key] === total[max[0]]) {
      max.push(key);
    }
    return max;
  }, []);
}
