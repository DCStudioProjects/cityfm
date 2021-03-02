import React, { Component } from 'react'

export default class Chat extends Component {

  render() {
    return (
      <div>
        <h1>Гостевая книга</h1>
        <div id="sigCommentsBlock"></div>
        <script type="text/javascript">
          {(function () {
            var host_id = '5096';
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//sigcomments.com/chat/?host_id=' + host_id;
            var ss = document.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(script, ss);
          })()};</script>
        <p>DJ передаёт сообщения на 30-ой минуте эфира!</p>
      </div>
    )
  }
}