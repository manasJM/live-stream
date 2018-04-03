import { Component, OnInit, OnDestroy } from '@angular/core';
import {GoogleAPIService} from '../googleAPI.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit, OnDestroy {

  chatMessages; 
  chatMessagesModel;
  searchInput = '';
  timeoutId;

  constructor(private googleAPIService: GoogleAPIService,
              private router: Router) {
   }

   ngOnInit() {
    this.executeAPICalls();
  }

  /**
   * Gets the live chat messages for the specified live stream
   */
  executeAPICalls() {
    this.googleAPIService.getChatId().mergeMap(data => {
            let chatId;
            for(let item of data['items']) {
              chatId = item.liveStreamingDetails.activeLiveChatId;
              if (chatId != null) {  break; }
            }
           return this.googleAPIService.getChatMessages(chatId);
          }).subscribe(res => {
              this.chatMessages = res['items'];
              this.chatMessagesModel = this.chatMessages;
              // updates the chat list based on the polling returned by the chat messages
              this.timeoutId = setTimeout(() => {
                this.executeAPICalls();
              }, res['pollingIntervalMillis']);
        },
        error => {
          this.router.navigate(['login']);
          window.location.reload(true);
          console.log(error);
        });
    
  }

  /**
   * Filters the chat list given a user name.
   * If no user name is specified we show the whole list
   */

  filterChatList() {
    if(this.searchInput.length > 0 ) {
      this.searchInput = this.searchInput.toLowerCase();
      this.chatMessagesModel = this.chatMessages.filter(item => {
                return item.authorDetails.displayName.toLowerCase() === this.searchInput;
      });
    }else {
      this.chatMessagesModel = this.chatMessages;
    }    
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
