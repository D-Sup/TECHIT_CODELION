const toggle = document.querySelectorAll('.toggle');
const section_contents = document.querySelector('.section-contents');
const card_cover = document.querySelectorAll('.card-cover');
const card_soldout = document.querySelector('.card-soldout');

let switchDirection = '0';

function load() {
  toggle.forEach(toggle => {
    toggle.addEventListener('click', e => {
      if (window.innerWidth > 1300) {
        eventBlock(true);
        const toggle_index = e.currentTarget.dataset.id;
        if (toggle_index === '0') {
          const background = 'url(./images/cover01.png) 0% 0% / cover';
          switchDirection = '0';
          windowEffect(background, e);
        } else if (toggle_index === '1') {
          const background = 'url(./images/cover02.png) 0% 0% / cover';
          switchDirection = '0';
          scaleEffect(background, e);
        } else {
          const background = 'url(./images/cover03.png) 100% 0% / cover';
          switchDirection = '-1';
          windowEffect(background, e);
        }
      }
    });
  });
}

function windowEffect(background, e) {
  const toggle_color = e.currentTarget.parentElement.querySelector('.toggle-color');
  const toggle_title = e.currentTarget.parentElement.querySelector('.toggle-title');
  const toggle = e.currentTarget;
  toggle.style.left = switchDirection;
  toggle_color.style.left = switchDirection;
  toggle.style.background = background;
  toggle.style.zIndex = '3';
  setTimeout(() => {
    section_contents.style.overflow = 'hidden';
    card_soldout.style.opacity = '0';
    toggle.style.height = '600px';
    setTimeout(() => {
      toggle.style.width = '2000px';
      setTimeout(() => {
        toggle_title.style.display = 'initial';
        toggle_title.style.opacity = '1';
        toggle_color.style.opacity = '1';
        toggle_color.style.height = '600px';
        setTimeout(() => {
          toggle_title.style.transform = 'scale(3.5)';
          setTimeout(() => {
            toggle_title.style.opacity = '0';
            toggle_color.style.opacity = '0';
            setTimeout(() => {
              toggle_title.style.transform = 'scale(0)';
              toggle_color.style.height = '';
              toggle.style.width = '';
              toggle.style.height = '';
              toggle.style.transform = 'scale(1)';
              card_soldout.style.display = 'inherit';
              setTimeout(() => {
                section_contents.style.overflow = '';
                card_soldout.style.opacity = '1';
                eventBlock(false);
                toggle.style.zIndex = '';
                toggle_color.style.marginLeft = '0px';
              }, 700);
            }, 500);
          }, 1000);
        }, 300);
      }, 500);
    }, 500);
  }, 300);
}

function scaleEffect(background, e) {
  const toggle_color = e.currentTarget.parentElement.querySelector('.toggle-color');
  const toggle_title = e.currentTarget.parentElement.querySelector('.toggle-title');
  const toggle = e.currentTarget;
  toggle.style.left = switchDirection;
  toggle_color.style.left = switchDirection;
  toggle.style.background = background;
  toggle.style.zIndex = '3';
  setTimeout(() => {
    section_contents.style.overflow = 'hidden';
    card_soldout.style.opacity = '0';
    toggle_color.style.marginLeft = '-368px';
    toggle.style.transform = 'scale(4)';
    setTimeout(() => {
      toggle_title.style.display = 'initial';
      toggle_title.style.opacity = '1';
      toggle_color.style.opacity = '1';
      toggle_color.style.height = '600px';

      setTimeout(() => {
        toggle_title.style.transform = 'scale(3.5)';
        setTimeout(() => {
          toggle_title.style.opacity = '0';
          toggle_color.style.opacity = '0';
          setTimeout(() => {
            toggle_title.style.transform = 'scale(0)';
            toggle_color.style.height = '';
            toggle.style.transform = 'scale(1)';
            card_soldout.style.display = 'inherit';
            setTimeout(() => {
              card_soldout.style.opacity = '1';
              section_contents.style.overflow = '';
              eventBlock(false);
              toggle.style.zIndex = '';
            }, 1000);
          }, 500);
        }, 1000);
      }, 300);
    }, 500);
  }, 300);
}

function eventBlock(onoff) {
  if (onoff) {
    card_cover.forEach(e => {
      e.style.pointerEvents = 'none';
    });
  } else {
    card_cover.forEach(e => {
      e.style.pointerEvents = '';
    });
  }
}

load();
