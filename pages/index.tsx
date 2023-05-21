import type { NextPage } from 'next';
import Link from 'next/link';
import NetfuixLogo from '../components/svg/NetfuixLogo';
import { SlGlobe } from 'react-icons/sl';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DisclaimerModal from '../components/DisclaimerModal';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <main className='w-full overflow-hidden bg-[rgba(0,8,29,1)]'>
        <div className='relative landing-bg'>
          <nav className='flex justify-between items-center py-5'>
            <Link href='/'>
              <NetfuixLogo classes='h-[1.6rem] md:w-[9.25rem] md:h-[2.5rem] text-red-netfuix block fill-current' />
            </Link>
            <div className='inline-flex items-center gap-3'>
              <div className='inline-flex items-center justify-between bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] py-0 px-4 text-white h-8 rounded'>
                <div className='flex items-center'>
                  <SlGlobe />
                  <p className='hidden sm:block text-base pl-3 pr-12'>
                    English
                  </p>
                </div>
                <AiFillCaretDown className='ml-2 sm:ml-0 text-xs' />
              </div>
              <button
                onClick={() => router.push('/auth')}
                className='text-white bg-red-netfuix hover:bg-red-netfuix-dark font-semibold py-1 px-4 rounded transition'
              >
                Sign In
              </button>
            </div>
          </nav>
          <div className='pt-[3.75rem] px-6 sm:pt-[3.75rem] sm:px-10 lg:pt-[3.75rem] lg:px-10 xl:pt-[5.875rem] xl:px-6 3xl:pt-[5.875rem] 3xl:px-10 pb-[26.25rem]'>
            <div className='mt-4 w-full sm:w-[75%]'>
              <h1 className='text-white text-[2.5rem] font-bold lg:text-5xl lg:font-black xl:text-[4rem] xl:leading-[5rem] 3xl:text-[5.5rem] 3xl:leading-[6.25rem]'>
                Unlimited movies, TV shows, and more
              </h1>
            </div>
            <div className='mt-4 w-full sm:w-[75%]'>
              <p className='text-white text-lg font-medium xl:text-2xl 3xl:text-[2rem] 3xl:font-bold'>
                Watch anywhere. Cancel anytime.
              </p>
            </div>
            <div className='mt-4 pt-4 w-full'>
              <div className='max-w-[61.5rem]'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    router.push('/auth');
                  }}
                  className='flex flex-col'
                >
                  <h3 className='text-white text-xl leading-[1.875rem]'>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className='mt-4 flex flex-col gap-4 sm:gap-0 sm:flex-row w-full max-w-[36.625rem]'>
                    <div className='relative sm:flex-auto'>
                      <input
                        id='email'
                        type='email'
                        className='block rounded-[0.25rem] px-4 pt-6 pb-1 w-full text-base text-white bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] appearance-none focus:ring-0 focus-visible:outline-none peer'
                        placeholder=' '
                      />
                      <label
                        className='absolute text-base text-[rgba(255,255,255,0.7)] duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                        htmlFor='email'
                      >
                        Email address
                      </label>
                    </div>
                    <button
                      onClick={() => router.push('/auth')}
                      type='button'
                      className='text-white bg-red-netfuix hover:bg-red-netfuix-dark font-semibold py-2 sm:py-1 px-6 rounded transition sm:ml-2 text-2xl w-auto inline-flex items-center justify-start'
                    >
                      Get Started
                      <FiChevronRight className='text-3xl' />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='landing-vignette'></div>
        </div>
        <div className='w-full relative -mt-[335px] sm:-mt-[220px] xl:-mt-[200px] 3xl:-mt-[244px] px-6 sm:px-8 xl:px-12 text-white'>
          <div>
            <div className='mt-8 grid md:grid-cols-2 2xl:grid-cols-4 gap-2'>
              <div className='gradient-box rounded-lg'>
                <div className='flex flex-col pt-[1.375rem] px-6 pb-[3.4375rem] sm:pt-[1.625rem] sm:px-[min(10%,2.5rem)] sm:pb-[4.75rem] xl:pt-[2.75rem] xl:px-[min(10%,1.5rem)] xl:pb-[4.75rem] 3xl:pt-[2rem] 3xl:px-[2.5rem)] 3xl:pb-[6.25rem]'>
                  <Image
                    src='/images/tv.svg'
                    width={100}
                    height={100}
                    alt='TV'
                  />
                  <p className='mt-4 text-white text-2xl sm:text-[2rem] font-bold'>
                    Enjoy on your TV
                  </p>
                  <p className='mt-4 text-white'>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                  </p>
                </div>
              </div>
              <div className='gradient-box rounded-lg'>
                <div className='flex flex-col pt-[1.375rem] px-6 pb-[3.4375rem] sm:pt-[1.625rem] sm:px-[min(10%,2.5rem)] sm:pb-[4.75rem] xl:pt-[2.75rem] xl:px-[min(10%,1.5rem)] xl:pb-[4.75rem] 3xl:pt-[2rem] 3xl:px-[2.5rem)] 3xl:pb-[6.25rem]'>
                  <Image
                    src='/images/popcorn.svg'
                    width={100}
                    height={100}
                    alt='Popcorn'
                  />
                  <p className='mt-4 text-white text-2xl sm:text-[2rem] font-bold'>
                    Watch everywhere
                  </p>
                  <p className='mt-4 text-white'>
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </p>
                </div>
              </div>
              <div className='gradient-box rounded-lg'>
                <div className='flex flex-col pt-[1.375rem] px-6 pb-[3.4375rem] sm:pt-[1.625rem] sm:px-[min(10%,2.5rem)] sm:pb-[4.75rem] xl:pt-[2.75rem] xl:px-[min(10%,1.5rem)] xl:pb-[4.75rem] 3xl:pt-[2rem] 3xl:px-[2.5rem)] 3xl:pb-[6.25rem]'>
                  <Image
                    src='/images/crystalball.svg'
                    width={100}
                    height={100}
                    alt='Crystal ball'
                  />
                  <p className='mt-4 text-white text-2xl sm:text-[2rem] font-bold'>
                    Create profiles for kids
                  </p>
                  <p className='mt-4 text-white'>
                    Send kids on adventures with their favorite characters in a
                    space made just for them—free with your membership.
                  </p>
                </div>
              </div>
              <div className='gradient-box rounded-lg'>
                <div className='flex flex-col pt-[1.375rem] px-6 pb-[3.4375rem] sm:pt-[1.625rem] sm:px-[min(10%,2.5rem)] sm:pb-[4.75rem] xl:pt-[2.75rem] xl:px-[min(10%,1.5rem)] xl:pb-[4.75rem] 3xl:pt-[2rem] 3xl:px-[2.5rem)] 3xl:pb-[6.25rem]'>
                  <Image
                    src='/images/download.svg'
                    width={100}
                    height={100}
                    alt='Download'
                  />
                  <p className='mt-4 text-white text-2xl sm:text-[2rem] font-bold'>
                    Download your shows to watch offline
                  </p>
                  <p className='mt-4 text-white'>
                    Save your favorites easily and always have something to
                    watch.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full mt-6'>
              <div className='flex flex-col mt-[48px] sm:mt-[52px] 3xl:mt-[62px] pt-0 px-6 pb-24 sm:px-10 xl:px-6 3xl:px-10 w-full max-w-[75.75rem]'>
                <h2 className='mt-4 text-white text-[2rem] sm:text-[2.5rem] font-bold'>
                  Frequently Asked Questions
                </h2>
                <div className='mt-4'>
                  <div className='w-full text-2xl'>
                    <details className='w-full bg-[rgba(19,33,68,1)] text-white cursor-pointer mb-3'>
                      <summary className="w-full border-b-[0.0625rem] border-[rgba(0,8,29,1)] bg-[rgba(19,33,68,1)] text-white flex justify-between p-6 after:content-[url('/images/plus.svg')]">
                        What is Netfuix?
                      </summary>
                      <p className='p-6'>
                        Netfuix is a streaming service that offers a wide
                        variety of award-winning TV shows, movies, anime,
                        documentaries, and more on thousands of
                        internet-connected devices.
                      </p>
                      <p className='p-6 pt-0'>
                        You can watch as much as you want, whenever you want
                        without a single commercial - all for one low monthly
                        price. There&apos;s always something new to discover and
                        new TV shows and movies are added every week!
                      </p>
                    </details>
                    <details className='w-full bg-[rgba(19,33,68,1)] text-white cursor-pointer mb-3'>
                      <summary className="w-full border-b-[0.0625rem] border-[rgba(0,8,29,1)] bg-[rgba(19,33,68,1)] text-white flex justify-between p-6 after:content-[url('/images/plus.svg')]">
                        How much does Netfuix cost?
                      </summary>
                      <p className='p-6'>
                        Watch Netfuix on your smartphone, tablet, Smart TV,
                        laptop, or streaming device, all for one fixed monthly
                        fee. Plans range from RM17 to RM55 a month. No extra
                        costs, no contracts.
                      </p>
                    </details>
                    <details className='w-full bg-[rgba(19,33,68,1)] text-white cursor-pointer mb-3'>
                      <summary className="w-full border-b-[0.0625rem] border-[rgba(0,8,29,1)] bg-[rgba(19,33,68,1)] text-white flex justify-between p-6 after:content-[url('/images/plus.svg')]">
                        Where can I watch?
                      </summary>
                      <p className='p-6'>
                        Watch anywhere, anytime. Sign in with your Netfuix
                        account to watch instantly on the web at netfuix.com
                        from your personal computer or on any internet-connected
                        device that offers the Netfuix app, including smart TVs,
                        smartphones, tablets, streaming media players and game
                        consoles.
                      </p>
                      <p className='p-6 pt-0'>
                        You can also download your favorite shows with the iOS,
                        Android, or Windows 10 app. Use downloads to watch while
                        you&apos;re on the go and without an internet
                        connection. Take Netfuix with you anywhere.
                      </p>
                    </details>
                    <details className='w-full bg-[rgba(19,33,68,1)] text-white cursor-pointer mb-3'>
                      <summary className="w-full border-b-[0.0625rem] border-[rgba(0,8,29,1)] bg-[rgba(19,33,68,1)] text-white flex justify-between p-6 after:content-[url('/images/plus.svg')]">
                        How do I cancel?
                      </summary>
                      <p className='p-6'>
                        Netfuix is flexible. There are no pesky contracts and no
                        commitments. You can easily cancel your account online
                        in two clicks. There are no cancellation fees - start or
                        stop your account anytime.
                      </p>
                    </details>
                    <details className='w-full bg-[rgba(19,33,68,1)] text-white cursor-pointer mb-3'>
                      <summary className="w-full border-b-[0.0625rem] border-[rgba(0,8,29,1)] bg-[rgba(19,33,68,1)] text-white flex justify-between p-6 after:content-[url('/images/plus.svg')]">
                        What can I watch on Netfuix?
                      </summary>
                      <p className='p-6'>
                        Netfuix has an extensive library of feature films,
                        documentaries, TV shows, anime, award-winning Netfuix
                        originals, and more. Watch as much as you want, anytime
                        you want.
                      </p>
                    </details>
                    <details className='w-full bg-[rgba(19,33,68,1)] text-white cursor-pointer mb-3'>
                      <summary className="w-full border-b-[0.0625rem] border-[rgba(0,8,29,1)] bg-[rgba(19,33,68,1)] text-white flex justify-between p-6 after:content-[url('/images/plus.svg')]">
                        Is Netfuix good for kids?
                      </summary>
                      <p className='p-6'>
                        The Netfuix Kids experience is included in your
                        membership to give parents control while kids enjoy
                        family-friendly TV shows and movies in their own space.
                      </p>
                      <p className='p-6 pt-0'>
                        Kids profiles come with PIN-protected parental controls
                        that let you restrict the maturity rating of content
                        kids can watch and block specific titles you don’t want
                        kids to see.
                      </p>
                    </details>
                  </div>
                </div>
                <div className='mt-1 w-full'>
                  <div className='max-w-[61.5rem]'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        router.push('/auth');
                      }}
                      className='flex flex-col'
                    >
                      <h3 className='text-white text-xl leading-[1.875rem]'>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                      </h3>
                      <div className='mt-4 flex flex-col gap-4 sm:gap-0 sm:flex-row max-w-[36.625rem]'>
                        <div className='relative flex-auto'>
                          <input
                            id='email'
                            type='email'
                            className='block rounded-[0.25rem] px-4 pt-6 pb-1 w-full text-base text-white bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] appearance-none focus:ring-0 focus-visible:outline-none peer'
                            placeholder=' '
                          />
                          <label
                            className='absolute text-base text-[rgba(255,255,255,0.7)] duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                            htmlFor='email'
                          >
                            Email address
                          </label>
                        </div>
                        <button
                          onClick={() => router.push('/auth')}
                          type='button'
                          className='text-white bg-red-netfuix hover:bg-red-netfuix-dark font-semibold py-2 sm:py-1 px-6 rounded transition sm:ml-2 text-2xl flex items-center'
                        >
                          Get Started
                          <FiChevronRight className='text-3xl' />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='mt-36 w-full'>
                  <footer className='text-[rgba(255,255,255,0.7)] w-full max-w-[75.75rem]'>
                    <p>
                      Questions? Email me at{' '}
                      <a
                        href='mailto:contact@salimi.my'
                        className='hover:underline cursor-pointer'
                      >
                        contact@salimi.my
                      </a>
                    </p>
                    <div className='mt-9 w-full'>
                      <ul className='inline-flex leading-[1.3125rem] flex-wrap'>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          FAQ
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Help Center
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Account
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Media Center
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Investor Relations
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Jobs
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Redeem Gift Cards
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Buy Gift Cards
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Ways to Watch
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Terms of Use
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Privacy
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Cookie Preferences
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Corporate Information
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Contact Us
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Speed Test
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Legal Notices
                        </li>
                        <li className='grow-0 shrink-0 basis-full sm:basis-[50%] lg:basis-[33.3%] xl:basis-[25%] cursor-pointer underline mt-3'>
                          Only on Netflix
                        </li>
                      </ul>
                    </div>
                  </footer>
                  <div className='inline-flex items-center gap-3 mt-12'>
                    <div className='inline-flex items-center justify-between bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] py-0 px-4 text-white h-8 rounded'>
                      <div className='flex items-center'>
                        <SlGlobe />
                        <p className='text-base pl-3 pr-12'>English</p>
                      </div>
                      <AiFillCaretDown className='text-xs' />
                    </div>
                  </div>
                  <p className='mt-10 text-[rgba(255,255,255,0.7)] text-sm'>
                    Netfuix. Created by{' '}
                    <a href='https://www.salimi.my' target='_blank'>
                      Salimi
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DisclaimerModal />
    </>
  );
};

export default Home;
