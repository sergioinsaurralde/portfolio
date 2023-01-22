import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { contact } from 'config/contact';
import { openPopupWidget } from 'react-calendly';
import { RoughNotation } from 'react-rough-notation';

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  function onScheduleMeeting(): void {
    if (!contact.calendly) {
      console.error('err: no se proporcionó el enlace de calendly.');
      return;
    }

    const config = {
      url: contact.calendly,
    };

    openPopupWidget(config);
  }

  return (
    <>
      <PageSEO
        title={`Contacto - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contacto' />
        <div className='container py-12'>
          <p>
            ¿Tienes un proyecto en mente? ¿Quieres contratarme? o simplemente quieres hablar? 
            No dudes en
            
            <span
              className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
              onClick={onScheduleMeeting}
              role='button'
              tabIndex={0}
            >
              <RoughNotation
                show
                type='underline'
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                programar una reunión.
              </RoughNotation>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
