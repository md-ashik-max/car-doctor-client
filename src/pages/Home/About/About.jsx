import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

// https://docs.google.com/presentation/d/1e7hqPh0y9k-X-TW4V6QEQhHL5xjeMsX-/edit?usp=sharing&ouid=102206739873130987812&rtpof=true&sd=true

// https://forms.gle/zpHs2iynJ8C19Vjr7

// https://forms.gle/zpHs2iynJ8C19Vjr7


const About = () => {
    return (
        <div className="hero bg-base-200 my-24 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl h-96" />
                    <img src={parts} className="w-1/2 absolute right-5 top-60 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-6'>
                    <h3 className='text-3xl font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white border-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;