import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { CommentBox } from '../components/comment-box';

bootstrap(CommentBox, [HTTP_PROVIDERS]);
