import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {URLSearchParams, Response} from '@angular/http';



@Injectable()
export class GoogleAPIService {

  constructor(private http: HttpClient) { }

  /**
   * Calls Google API to get the chat id which is required to get chat messages
   */
  getChatId() {
    const token = localStorage.getItem('token');
    let params = {
      'access_token': token,
      'part': "id, snippet, liveStreamingDetails",
      'id': "y3niFzo5VLI"
    }
    
    return this.http.get('https://www.googleapis.com/youtube/v3/videos', {params: params});
  }

  /**
   * Calls Google API to get live chat messages for the live stream
   * @param liveChatId
   */
  getChatMessages(liveChatId) {
    const token = localStorage.getItem('token');
    let params = {
      'access_token': token,
      'part': "id, snippet, authorDetails",
      'liveChatId': liveChatId
    }

    return this.http.get('https://www.googleapis.com/youtube/v3/liveChat/messages', {params: params});
  }

}
