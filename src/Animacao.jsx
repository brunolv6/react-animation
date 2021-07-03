import React from "react";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const bg = {
    color: 'white',
    backgroundColor: 'red',
    width: '100%',
    height: '100vh',
    fontSize: '2.5vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const animacao1 = {
    opacity: '0',
    position: 'absolute',
    fontSize: "4vw",
};

const animacao2 = {
    zIndex: '3',
    top: '0',
    left: '0',
    position: 'absolute',
    fontSize: '2vw'
};

const estatico = {
    top: '0',
    left: '0',
    right: '0',
    position: 'absolute',
    fontSize: '2vw'
};

class Animacao extends React.Component{

    componentDidMount() {
        var timeLineProcessor = new TimelineMax({ onUpdate: this.updatePercentage });

        var controller = new ScrollMagic.Controller();

        timeLineProcessor.to('.c-animacao-1', .5, { opacity: '1' }, .5);

        timeLineProcessor.to('.c-animacao-2', .8, { left: '80vw', top: "100vh" }, .1)
            .to('.c-animacao-2', .2, { opacity: '0'}, .8)

        const scene = new ScrollMagic.Scene({
            triggerElement: ".c-animacao",
            triggerHook: "onLeave",
            duration: "240%"
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
            <div className="c-animacao-1" style={animacao1}>Aparecendo centro</div>
            <div className="c-animacao-2" style={animacao2}>Movimento Diagonal</div>
            <div className="c-animacao-3" style={estatico}>Estático</div>
        </div>
        );
    }
  }
  
  export default Animacao;