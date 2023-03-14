import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { GithubService } from 'src/services/github.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RepoListComponent } from './repo-list.component';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { SearchRepoReponse } from 'src/mocks/search-repo';
import { PaginatedReposReponse } from 'src/mocks/paginated-repos';
import { User } from 'src/mocks/user';
import { Router } from '@angular/router';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  const mockGithubService = jasmine.createSpyObj('GithubService', [
    'searchUserRepos',
    'getUserRepos',
  ]);
  const mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
        { provide: GithubService, useValue: mockGithubService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check for username when empty', () => {
    component.username = null;
    fixture.detectChanges();
    const getPaginatedUserReposSpy = spyOn<RepoListComponent, any>(
      component,
      'getPaginatedUserRepos'
    );
    component.ngOnInit();
    expect(getPaginatedUserReposSpy).not.toHaveBeenCalled();
  });

  it('check for username when not empty', () => {
    component.username = 'primefaces';
    fixture.detectChanges();
    const getPaginatedUserReposSpy = spyOn<RepoListComponent, any>(
      component,
      'getPaginatedUserRepos'
    );
    component.ngOnInit();
    expect(getPaginatedUserReposSpy).toHaveBeenCalled();
  });

  it('Search repo success', () => {
    mockGithubService.searchUserRepos.and.returnValue(of(SearchRepoReponse));
    component.username = 'primefaces';
    component.pageSize = 1;
    component.pageNumber = 1;
    const response = SearchRepoReponse;
    fixture.detectChanges();
    component['searchRepos']('test');
    expect(component.userRepoList).toEqual(response.items);
    expect(component.repoCount).toEqual(response.total_count);
  });

  it('Search repo error', () => {
    mockGithubService.searchUserRepos.and.returnValue(
      throwError(() => new Error('test'))
    );
    const onErrorSpy = spyOn<RepoListComponent, any>(component, 'onError');
    component.username = 'primefaces';
    component.pageSize = 1;
    component.pageNumber = 1;
    fixture.detectChanges();
    component['searchRepos']('test');
    expect(onErrorSpy).toHaveBeenCalled();
  });

  it('Paginated repos success', () => {
    mockGithubService.getUserRepos.and.returnValue(of(PaginatedReposReponse));
    component.username = 'primefaces';
    component.pageSize = 1;
    component.pageNumber = 1;
    component.userMetadata = User;
    const response = PaginatedReposReponse;
    fixture.detectChanges();
    component['getPaginatedUserRepos']();
    expect(component.userRepoList).toEqual(response);
    expect(component.repoCount).toEqual(User.public_repos);
  });

  it('Paginated repos error', () => {
    mockGithubService.getUserRepos.and.returnValue(
      throwError(() => new Error('test'))
    );
    const onErrorSpy = spyOn<RepoListComponent, any>(component, 'onError');
    component.username = 'primefaces';
    component.pageSize = 1;
    component.pageNumber = 1;
    fixture.detectChanges();
    component['getPaginatedUserRepos']();
    expect(onErrorSpy).toHaveBeenCalled();
  });

  it('Check for onPaginate when search enabled', () => {
    const params = {
      first: 1,
      rows: 1,
      page: 1,
      pageCount: 1,
    };
    const searchReposSpy = spyOn<RepoListComponent, any>(
      component,
      'searchRepos'
    );
    component['searchModeEnabled'] = true;
    fixture.detectChanges();
    component['onPaginate'](params);
    expect(component.pageSize).toBe(params.rows);
    expect(component.pageNumber).toBe(params.page + 1);
    expect(searchReposSpy).toHaveBeenCalled();
  });

  it('Check for onPaginate when search disabled', () => {
    const params = {
      first: 1,
      rows: 1,
      page: 1,
      pageCount: 1,
    };
    const getPaginatedUserReposSpy = spyOn<RepoListComponent, any>(
      component,
      'getPaginatedUserRepos'
    );
    component['searchModeEnabled'] = false;
    fixture.detectChanges();
    component['onPaginate'](params);
    expect(component.pageSize).toBe(params.rows);
    expect(component.pageNumber).toBe(params.page + 1);
    expect(getPaginatedUserReposSpy).toHaveBeenCalled();
  });

  it('Check for error actions', () => {
    mockMessageService.add.and.returnValue();
    const routerstub: Router = TestBed.inject(Router);
    const navigateSpy = spyOn(routerstub, 'navigate');
    component['onError']();
    expect(navigateSpy).toHaveBeenCalled();
  });

  it('check for search value', () => {
    const searchReposSpy = spyOn<RepoListComponent, any>(
      component,
      'searchRepos'
    );
    component.searchText = 'text';
    fixture.detectChanges();
    component.onSearch();
    expect(searchReposSpy).toHaveBeenCalled();
  });

  it('check for search clear', () => {
    const getPaginatedUserReposSpy = spyOn<RepoListComponent, any>(
      component,
      'getPaginatedUserRepos'
    );
    component.onSearchClear();
    expect(getPaginatedUserReposSpy).toHaveBeenCalled();
  });

  it('check for trackBy when empty', () => {
    component.trackRepo(1, null);
    expect(component.trackRepo).toBeTruthy();
  });

  it('check for trackBy repo available', () => {
    component.trackRepo(1, PaginatedReposReponse[0]);
    expect(component.trackRepo).toBeTruthy();
  });
});
