import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {SkeletonModule} from 'primeng/skeleton';
import {AvatarModule} from 'primeng/avatar';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        InputTextModule,
        ButtonModule,
        PaginatorModule,
        CardModule,
        TagModule,
        SkeletonModule,
        AvatarModule,
        ToastModule
    ],
    providers:[MessageService]
})
export class PrimeNgModules {}