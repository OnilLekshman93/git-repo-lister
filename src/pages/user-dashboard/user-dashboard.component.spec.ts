import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';
import { User } from 'src/mocks/user';
import { GithubService } from 'src/services/github.service';

import { UserDashboardComponent } from './user-dashboard.component';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  const mockGithubService = jasmine.createSpyObj('GithubService', [
    'getUserMetaData',
  ]);
  const mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
        { provide: GithubService, useValue: mockGithubService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should get a route param', () => {
    const getUserMetadataSpy = spyOn<UserDashboardComponent, any>(
      component,
      'getUser'
    );
    const router = TestBed.inject(Router);
    const route = TestBed.inject(ActivatedRoute);
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('primefaces');
    component.ngOnInit();
    expect(component.username).toEqual('primefaces');
    expect(getUserMetadataSpy).toHaveBeenCalled();
  });

  it('should get user details success', () => {
    mockGithubService.getUserMetaData.and.returnValue(of(User));
    component.username = 'primefaces';
    fixture.detectChanges();
    component['getUser']();
    expect(component.userMetadata).toEqual(User);
  });

  it('should get user details error', () => {
    mockGithubService.getUserMetaData.and.returnValue(
      throwError(() => new Error('test'))
    );
    mockMessageService.add.and.returnValue();
    const routerstub: Router = TestBed.inject(Router);
    const navigateSpy = spyOn(routerstub, 'navigate');
    component.username = 'primefaces';
    fixture.detectChanges();
    component['getUser']();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
