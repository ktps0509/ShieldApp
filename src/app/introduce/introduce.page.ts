import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingService } from '../service/loading.service';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.page.html',
  styleUrls: ['./introduce.page.scss'],
})

export class IntroducePage implements OnInit {
  FirstTime : number = 0;
  counter = 0;
  @ViewChild('slider', { static: true }) slid: IonSlides;

  constructor(
    private storage: StorageService,
    private router: Router,
    private loadingService: LoadingService,
  
  ) { }

  slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) { return; }
            if (!swiper || swiper.destroyed) { return; }
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  };

  ngOnInit() {
    // if(this.FirstTime != 0 )
    // {
    //   this.router.navigate(['/login']);
    // }
  }

  ionViewWillEnter() {

    var aaa = this.storage.get('isComplete');

    console.log(aaa, "AAAAA")

    if(!aaa)
    {
      if (this.counter > 0) {
        this.slidesDidLoad(this.slid);
      }
      this.counter++;
    }
    else{
      this.router.navigate(['/login']);
    }
    
  }

  clickToFinished() {
    this.loadingService.show("Loading");
    // Becuase of loging out was wiped all local storage and
    // the app's not return initail platform (in case users not close the app)
    // We need to set an initail default language. :: Best 27/01/2020
    this.storage.set('isComplete', true).then(() => {
      this.FirstTime = 1;
      this.loadingService.hide();
      this.router.navigate(['/login']);
    });
    
  }

  slidesDidLoad(slides: IonSlides) {
    slides.getActiveIndex().then(id => {
      const index = id;
      if (index && index !== 0) {
        this.slid.slideTo(0, 400, true);
        return;
      }
    });
  }

}
