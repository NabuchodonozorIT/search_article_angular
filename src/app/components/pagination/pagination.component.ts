import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ViewContainerRef, ViewChild} from '@angular/core';
// @ts-ignore
import paginate from 'jw-paginate';
import {ArticleData} from '../../model/articleData';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() public changePage = new EventEmitter<any>(true);
  @Input() public items: Array<ArticleData>;
  @Input() public initialPage = 1;
  @Input() public pageSize = 12;
  @Input() public maxPages = 10;

  public pager: any = {};
  public pageOfItems: Array<ArticleData>;
  public innerWidth: any;

  public ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  public setPage(page: number): void {
    if (!this.items) {
      return;
    }
    const maxPageInRow = Math.floor(this.innerWidth / 400);
    this.pager = paginate(this.items.length, page, maxPageInRow >= 3 ? maxPageInRow : this.pageSize, this.maxPages);
    this.pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.changePage.emit(this.pageOfItems);
  }
}
