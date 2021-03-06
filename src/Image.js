'use strict';

var React = require('react');
var classNames = require('classnames');
var omit = require('object.omit');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var constants = require('./constants');
var PropTypes = React.PropTypes;

var Image = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    src: PropTypes.string.isRequired,
    circle: PropTypes.bool,
    radius: PropTypes.bool,
    round: PropTypes.bool,
    responsive: PropTypes.bool,
    thumbnail: PropTypes.bool,
    placeholder: PropTypes.string,
    threshold: PropTypes.number,
    callback: PropTypes.func,
    asBgImage: PropTypes.bool
  },

  render: function() {
    var classSet = {};
    var restProps = omit(this.props, Object.keys(this.constructor.propTypes));

    classSet[constants.CLASSES.radius] = this.props.radius;
    classSet[constants.CLASSES.round] = this.props.round;
    classSet[constants.CLASSES.circle] = this.props.circle;
    classSet[this.setClassNamespace('img-responsive')] = this.props.responsive;
    classSet[this.setClassNamespace('img-thumbnail')] = this.props.thumbnail;

    return (
      <img
        src={this.props.src}
        {...restProps}
        className={classNames(this.props.className, classSet)}
      />
    );
  }
});

module.exports = Image;

/*
TODO:
- srcset/sizes 支持
  - http://caniuse.com/#feat=srcset
  - http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset
  - https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
- lazyload
- asBackground ?
*/
/*
 http://odin.s0.no/web/srcset/polyfill.htm
 https://github.com/borismus/srcset-polyfill
 https://github.com/JimBobSquarePants/srcset-polyfill
 http://www.html5rocks.com/en/mobile/high-dpi/
 http://www.html5rocks.com/en/tutorials/responsive/picture-element/
 https://ericportis.com/posts/2014/srcset-sizes/

 gif 占位符
 http://proger.i-forge.net/The_smallest_transparent_pixel/eBQ
 http://stackoverflow.com/questions/9126105/blank-image-encoded-as-data-uri
*/
