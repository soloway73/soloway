// Меню бургер
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".links");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

let links = menuBody.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menuBody.classList.remove("_active");
    iconMenu.classList.remove("_active");
    document.body.classList.remove("_lock");
  });
}

//Плавные перемещения

const menuLinks = document.querySelectorAll(".menu-link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// Подменятор отзывов

const allReviews = [
  {
    name: "Алексей Глазунов",
    photo: "img/reviewers/photo1.jpg",
    review:
      "Уже 8 месяцев с удовольствием я занимаюсь гитарой и вокалом в студии SOLOWAY у преподавателя Ильяса. А недавно мы начали детально изучать сольфеджио. Атмосфера приятная, дружеская. Инструмент выдают на время урока, можно свой не носить - это удобно. Потраченное время не проходит даром, я развиваюсь, улучшую навыки исполнения музыки, а также понимания теоретической составляющей. Хочу сказать СПА-СИ-БО за все открытия на занятиях в студии! Всем рекомендую!",
  },
  {
    name: "Мария Мокшина",
    photo: "img/reviewers/photo2.jpg",
    review:
      "Недавно загорелась желанием научиться игре на гитаре. В музыкальную школу идти уже поздно, а на курсы самое то! Узнав о данной школе, не раздумывая, сходила на пробный урок, безумно понравилось! С тех пор хожу на занятия уже 3 месяца, каждый урок проходит увлекательно и дружелюбно. Если у меня что-то не получается, меня всегда поддерживает Ильяс, говорит, как сделать так, чтобы получалось лучше. Он очень мотивирует меня, поэтому я всегда хочу поскорее взять гитару в руки и начать заниматься! С каждым уроком я замечаю, как мои показатели улучшаются, а все благодаря профессионализму и поддержке Ильяса!",
  },
  {
    name: "Женя Марыкина",
    photo: "img/reviewers/photo3.jpg",
    review:
      "Сомнений пойти учиться игре на гитаре не было совсем. Мечты обязательно должны сбываться! А с выбором студии даже не возникло вопросов. Ильяс-замечательный преподаватель и очень чуткий и отзывчивый человек! Он реально переживает за ученика, умеет поддержать в трудные моменты и похвалить, когда видит прогресс. И получаешь от таких занятий огромное удовольствие!",
  },
  {
    name: "Александра Андреева",
    photo: "img/reviewers/photo4.jpg",
    review:
      "Оставлю искренне положительный отзыв! С очень давнего времени хотела обучится игре на гитаре, было много попыток самостоятельно играть, но все заканчивалось безуспешно, не знала с чего начать. Ильяс показал все азы, все очень понятно объяснял, терпелив, что очень важно! ) Подстраивается индивидуально под особенности учеников, темп обучения задает быстрый. за 8 занятий, смогла сыграть целые композиции! Чего сама от себя не ожидала! ) Рекомендую, как мастера своего дела. Всегда подскажет как разобрать песни, которые не входят в базовую программу обучения )",
  },
  {
    name: "Геннадий Дербаков",
    photo: "img/reviewers/photo5.jpg",
    review:
      "Отзыв для тех кто всё ещё думает. Друзья нет ничего невозможного, было бы желание, а Ильяс поможет вам осуществить вашу мечту. Я с детства мечтал научиться играть на гитаре, но сначала родители были против, потом надо было думать о поступлении, потом и сам стал отцом и был период когда ты думаешь, что уже поздно..Нет, как говориться, учиться никогда не поздно! Главное найти своего учителя, и я нашёл! Наши уроки проходят в дружеской обстановке, мы всегда разучиваем те песни, которые ближе нам, а не какому то дядьке, который написал программу или самоучитель. Результаты не заставили себя ждать, после первого месяца я смог уже самостоятельно разучивать простенькие песни дома. И это с нуля, до этого я никогда не занимался. Не говоря уже о пользе занятий музыкой, наши занятия это всегда радостная встреча. Если хотите обрести новых друзей и осуществить свою мечту или мечту своего ребёнка, советую сходить хотя бы на пробный урок!",
  },
  {
    name: "Максим Стенин",
    photo: "img/reviewers/photo6.jpg",
    review:
      "Спасибо большое Ильясу за очень классные уроки, очень даже рекомендую! Каждому, кто хочет научиться играть на гитаре, только сюда",
  },
  {
    name: "Юлия Углева",
    photo: "img/reviewers/photo7.jpg",
    review:
      "Давно хотела научится играть на гитаре, но все не решалась пойти на курсы. Спасибо, Ильяс, что пригласил на пробное занятие. Все решило оно. Спасибо за позитивный настрой, за интересные и продуктивные уроки, за терпение. Очень рада, что попала именно к тебе. Ты отличный преподователь!!!",
  },
  {
    name: "Аня Локалина",
    photo: "img/reviewers/photo8.jpg",
    review:
      "Выражаю благодарность Ильясу за самые классные уроки гитары. Благодаря ему, я научилась играть на гитаре, и это, правда, здорово. На уроках никогда не бывает скучно, хорошая атмосфера. Если учиться играть на гитаре, то только здесь🙂",
  },
  {
    name: "Анастасия Прохорова",
    photo: "img/reviewers/photo9.jpg",
    review:
      "Ильяс - прекрасный преподаватель! Учиться с ним легко и непринужденно. После занятия остается огромный заряд энергии и хочется играть снова и снова. А с его ценными и профессиональными советами это становится ещё и легко) Не раздумывайте - идите учиться к Ильясу. Море эмоций и душевное удовлетворение от игры Вам обеспечены!",
  },
  {
    name: "Николай Алексеев",
    photo: "img/reviewers/photo10.jpg",
    review:
      "Хочу сказать большое спасибо Ильясу за проведённую работу, старания и профессионализм! Пока я учился играть на гитаре, мы успевали не только получать удовольствие от играемой музыки, но и углубляться в технические и теоретические тонкости. Больше всего мне нравится, что Ильяс учит получать удовольствие от занятий и развиваться самостоятельно. Всем рекомендую!",
  },
];

let threeReviews = allReviews;

while (threeReviews.length > 3) {
  let randomIndex = Math.round(Math.random() * threeReviews.length);
  console.log(randomIndex);

  threeReviews.splice(randomIndex, 1);
}

let makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

let boxContainer = document.querySelector(".box-container");
let renderReview = (i) => {
  let box = makeElement("div", "box");
  let img = box.appendChild(makeElement("img", "photoReview"));
  img.src = threeReviews[i].photo;

  let nameSurname = makeElement("h4", "name");
  nameSurname.textContent = threeReviews[i].name;
  box.appendChild(nameSurname);

  let stars = makeElement("div", "stars", "⭐⭐⭐⭐⭐");
  box.appendChild(stars);

  let text = makeElement("p", "review", threeReviews[i].review);
  box.appendChild(text);

  boxContainer.appendChild(box);
};
let i = 0;
while (i < 3) {
  renderReview(i);
  i++;
}
