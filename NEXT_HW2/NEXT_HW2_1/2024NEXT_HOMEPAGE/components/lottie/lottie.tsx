import dynamic from 'next/dynamic';
import Rocket from 'public/assets/lottie/rocket-loader.json';
import Programming from 'public/assets/lottie/programming.json';
import Session from 'public/assets/lottie/session.json';
import Project from 'public/assets/lottie/project.json';
import Demoday from 'public/assets/lottie/demoday.json';
import DemodayFinal from 'public/assets/lottie/demoday-final.json';
import DemodayInHouse from 'public/assets/lottie/demoday-in-house.json';
import Launch from 'public/assets/lottie/launch.json';
import Fire from 'public/assets/lottie/fire.json';

const RocketLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie, useLottieInteractivity } = mod;
            return () => {
                const options = { animationData: Rocket, loop: true };
                const style = { width: '100%' };
                const lottieObj = useLottie(options, style);
                const Animation = useLottieInteractivity({
                    lottieObj,
                    mode: 'scroll',
                    actions: [
                        { visibility: [0, 0.2], type: 'stop', frames: [0] },
                        { visibility: [0.2, 0.45], type: 'seek', frames: [0, 45] },
                        { visibility: [0.45, 1.0], type: 'loop', frames: [45, 110] },
                    ],
                });
                return Animation;
            };
        }),
    { ssr: false }
);

const LaptopLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: Programming };
                const style = { width: '100%' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

const SessionLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: Session };
                const style = { width: '100%' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

const ProjectLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: Project };
                const style = { width: '100%' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

const DemodayLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: Demoday };
                const style = { width: '100%' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

const DemodayFinalLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: DemodayFinal };
                const style = { width: '100%' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

const DemodayInHouseLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: DemodayInHouse };
                const style = { width: '100%' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

const FireLottie = dynamic(
    () =>
        import('lottie-react').then((mod) => {
            const { useLottie } = mod;
            return () => {
                const options = { animationData: Fire };
                const style = { width: '100%', height: '100%', transform: 'rotate(180deg)' };
                const { View } = useLottie(options, style);
                return View;
            };
        }),
    { ssr: false }
);

export {
    RocketLottie,
    LaptopLottie,
    SessionLottie,
    ProjectLottie,
    DemodayLottie,
    DemodayFinalLottie,
    DemodayInHouseLottie,
    FireLottie,
};
