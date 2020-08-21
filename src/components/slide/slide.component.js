import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div class="slide-mobile">
          <div class="slide-heading">
            My world today
        </div>
          <div className="slide-text-mobile">
            <p class="slide-text">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <span class="slide-stext">View all days</span> eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
          </p>
          </div>
        </div>
        )
    }

}

export default Slide;