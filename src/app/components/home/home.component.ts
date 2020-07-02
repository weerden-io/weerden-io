import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as GitHubCalendar from 'github-calendar';
require('jquery-rss');

// expose for testing
export const dependencies = {
  GitHubCalendar
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
    this.loadRSSFeed();
    this.initGithubCalendar();
    this.resetLevelBar();
  }

  ngAfterViewInit(): void {
    this.animateLevelBar();
  }

  resetLevelBar(): void {
    $('.level-bar-inner').css('width', '0');
  }

  animateLevelBar(): void {
    $('.level-bar-inner').each(function() {
      const itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  }

  initGithubCalendar(): void {
    dependencies.GitHubCalendar('#github-graph', 'jimenezweerden');
  }

  loadRSSFeed(): void {
    // @ts-ignore
    $('#rss-feeds').rss(
      'https://jimenezweerden.wordpress.com/feed/',
      {
        limit: 3,
        effect: 'slideFastSynced',
        ssl: true,
        layoutTemplate: '<div class=\'items\'>{entries}</div>',
        entryTemplate: `
        <div class='item'>
        <h3 class='title'>
        <a href='{url}' target='_blank'>{title}</a>
        </h3>
        <div>
        <p>{shortBodyPlain}...</p>
        <a class='more-link' href='{url}' target='_blank'>
        <i class='fas fa-external-link-alt'></i>Read more</a>
        </div>
        </div>
        `
      }
    );
  }
}
