import React, { useEffect, useRef, useState } from 'react';
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import gsap from 'gsap';
import Avatar from './components/Avatar/Avatar';
import AvatarGroup from './components/AvatarGroup/AvatarGroup';
import Badge from './components/Badge/Badge';
import CheckBox from './components/CheckBox/CheckBox';
import PinContainer from './components/PinInput/PinContainer';
import PinBox from './components/PinInput/PinBox';

function App() {

  const [toogleAlert, setToogleAlert] = useState(false)
  const [check, setCheck] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center relative bg-[#F5F5F5] gap-10">
      <div className='relative'>
        <h1 className="text-6xl font-bold text-center relative">
          Welcome to the React<span className="text-[#61DAFB]">Nex</span>
        </h1>
        <AnimatedSVG />
      </div>
      {
        toogleAlert &&
        <>
          < Alert
            type="info"
            title="Information"
            message="This is an information message."
            position="top-left"
          />
          <Alert
            type="success"
            title="Success!"
            message="Your operation was successful."
            position="top-right"
          />

          <Alert
            type="error"
            title="Error!"
            message="An error occurred while processing your request."
            position="bottom-left"
          />

          <Alert
            type="warning"
            title="Warning!"
            message="Please proceed with caution."
            position="bottom-right"
          />

          <Alert
            type="warning"
            title="Warning!"
            message="Please proceed with caution."
            position="top-center"
          />

          {/* <Alert
            type="warning"
            title="Warning!"
            message="Please proceed with caution."
            position="bottom-center"
          /> */}
        </>
      }
      <Button title="Button" className={"bg-black-900"} onClick={() => setToogleAlert(!toogleAlert)}></Button>

      {/* <div className='flex flex-row gap-4'>
        <Avatar size={'2xl'} />
        <Avatar size={'xl'} />
        <Avatar size={'lg'} />
        <Avatar size={'md'} />
        <Avatar size={'sm'} />
        <Avatar size={'xs'} />
      </div> */}
      <AvatarGroup imageContainerStyle={' bg-red-400'}>
        <Avatar size={'sm'} src='https://bit.ly/ryan-florence' />
        <Avatar size={'sm'} src='https://bit.ly/sage-adebayo' />
        <Avatar size={'sm'} src='https://bit.ly/kent-c-dodds' />
        <Avatar size={'sm'} src='https://bit.ly/prosper-baba' />
        <Avatar size={'sm'} src='https://bit.ly/code-beast' />
      </AvatarGroup>

      <div className=' flex flex-row gap-4'>
        <Badge className="bg-blue-500">New Arrival</Badge>
        <Badge className="bg-green-500">On Sale</Badge>
        <Badge className="bg-yellow-500">Bestseller</Badge>
        <Badge className="bg-red-500">Limited Edition</Badge>
        <Badge className="bg-purple-500">Featured</Badge>
        <Badge varient={"outline"}>Featured</Badge>
        <Badge>Badge</Badge>
      </div>
      <CheckBox
        label={'Accept terms and conditions'}
        description="You agree to our Terms of Service and Privacy Policy."
        isChecked={check}
        onCheckedChange={(data) => setCheck(data)}
      />
      <div>
        {
          check &&
          <Alert
            type="success"
            title="Success!"
            message="Your operation was successful."
            position="top-right"
          />
        }
      </div>
      <PinContainer>
        <PinBox size='sm' outline='#6477cc'/>
      </PinContainer>
      <PinContainer>
        <PinBox size='md'/>
      </PinContainer>
      <PinContainer>
        <PinBox size='lg'/>
      </PinContainer>
    </div>
  );
}

export default App;


const AnimatedSVG = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set initial stroke-dasharray and stroke-dashoffset
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Animate the stroke-dashoffset property to 0
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationCompleted(true);
      }
    });

    tl.to(path, {
      duration: 30, // Duration of the animation in seconds
      strokeDashoffset: 0, // Animate stroke-dashoffset to 0
      ease: "power1.inOut" // Easing function
    });
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 284 23" className="w-[280px] absolute right-0 bottom-[-70%]">
      <path
        ref={pathRef}
        id="myPath"
        d="M 3 3 L 280.663 3 C 269.449 3 258.349 3.9 247.279 4.764 C 221.349 6.787 195.529 8.92 169.786 11.556 C 151.278 13.451 132.755 15.328 114.19 17.061 C 113.357 17.139 90.773 19.35 90.951 19.635 C 91.634 20.727 116.442 19.025 118.838 18.968 C 135.096 18.578 151.406 18.638 167.64 18.014"
        stroke="var(--token-9d85a53d-218a-49d3-a122-1f7b560ca535, #61DAFB) /* {&amp;quot;name&amp;quot;:&amp;quot;Accent&amp;quot;} */"
        strokeWidth="5"
        strokeLinecap="round"
        fill="transparent"
        opacity="1"
        pathLength="1"
      />
    </svg>
  );
};
