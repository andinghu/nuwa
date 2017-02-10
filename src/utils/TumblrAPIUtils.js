import $ from 'jquery';
import Promise from 'bluebird';

export default class TumblrAPIUtils {
  static api_key = 'IOpcKUe38y9H82vvTeHoPv8IT6aoIwfKmu9BD4lGf1o9N7q1Kx';

  static getPosts(blogName, tag) {
    return Promise.resolve($.ajax({
      url: `${BASE_URL}/v2/blog/${blogName}/posts?tag=${tag}&api_key=${TumblrAPIUtils.api_key}`,
      dataType: 'jsonp',
    }));
  }
}
