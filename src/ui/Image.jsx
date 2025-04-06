import React from "react";

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: {
                default: props.src,
                mobile: props.mobileSrc,
                tablet: props.tabletSrc,
            },
            alt: props.alt,
            width: props.width || '100%',
            height: props.height,
            className: props.className,
        };
    }

    render() {
        return (
            <picture>
                {this.state.src.tablet ? <source media="(min-width:501px) and (max-width: 980px)" srcSet={this.state.src.tablet} /> : ''} 
                {this.state.src.mobile ? <source media="(max-width:500px)" srcSet={this.state.src.mobile} /> : ''} 
                <img
                    src={this.state.src.default}
                    alt={this.state.alt}
                    width={this.state.width}
                    height={this.state.height}
                    className={this.state.className}
                />
            </picture>
        );
    }
}

export default Image;