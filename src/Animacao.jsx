import React from "react";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const bg = {
    color: 'white',
    backgroundColor: 'red',
    width: '100%',
    height: '100vh'
};

const animacao1 = {
    opacity: '0',
    top: '40vh',
    height: '100vh',
    position: 'absolute',
    fontSize: "4vw",
    left: "0",
    right: "0",
};

const animacao2 = {
    zIndex: '3',
    top: 0,
    left: '20vh',
    position: 'absolute'
};

class Animacao extends React.Component{
    componentDidMount() {
        var timeLineProcessor = new TimelineMax({ onUpdate: 'updatePercentage' });

        var controller = new ScrollMagic.Controller();

        timeLineProcessor.to('.c-animacao-1', .5, { opacity: '1' }, .5);

        timeLineProcessor.to('.c-animacao-2', .8, { left: '80%', top: "100vh" }, .1)
            .to('.c-animacao-2', .1, { opacity: '0'}, .8)

        timeLineProcessor.to('.c-animacao-2', .2, { zIndex: '4' }, .8);

        const scene = new ScrollMagic.Scene({
            triggerElement: ".c-animacao",
            triggerHook: "onLeave",
            duration: "300%"
        })
            .setPin(".c-animacao")
            .setTween(timeLineProcessor)
            .addTo(controller);

        // function updatePercentage() {
        //     timeLineProcessor.progress();
        // }
    }

    render() {
        return (
        <div className="c-animacao" style={bg}>
            <div className="c-animacao-1" style={animacao1}>Aparecendo no centro</div>
            <div className="c-animacao-2" style={animacao2}>Movimento Diagonal</div>
            <div className="c-animacao-3">Estático</div>
        </div>
        );
    }
  }
  
  export default Animacao;