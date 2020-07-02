import { AfterViewInit, Component, OnInit } from '@angular/core';
require('jquery-rss');
const GitHubCalendar = require('github-calendar');

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
    $('.level-bar-inner').css('width', '0');
  }

  ngAfterViewInit() {
    this.animateLevelBar();
  }

  animateLevelBar() {
    $('.level-bar-inner').each(function () {
      const itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  }

  initGithubCalendar() {
    new GitHubCalendar("#github-graph", "jimenezweerden");
  }

  loadRSSFeed() {
    // @ts-ignore
    $("#rss-feeds").rss(
      "https://jimenezweerden.wordpress.com/feed/",
      {
        limit: 3,
        effect: 'slideFastSynced',
        ssl: true,
        layoutTemplate: "<div class='items'>{entries}</div>",
        entryTemplate: `
        <div class="item">
        <h3 class="title">
        <a href="{url}" target="_blank">{title}</a>
        </h3>
        <div>
        <p>{shortBodyPlain}...</p>
        <a class="more-link" href="{url}" target="_blank">
        <i class="fas fa-external-link-alt"></i>Read more</a>
        </div></div>
        `
      }
    );
  }


}
