import { Helmet } from "react-helmet-async";


const MetaPixel = () => {
    return(
        <Helmet>
            <script id="facebook-pixel-script">{`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1211174983759818'); 
                fbq('track', 'PageView');
                `}
            </script>
            <noscript id="facebook-pixel-image">{`
                <img height="1" width="1" 
                src="https://www.facebook.com/tr?id=1211174983759818&ev=PageView
                &noscript=1"/>
            `}
            </noscript>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16842547823"></script> 
            <script> 
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16842547823');`}
            </script> 
        </Helmet>
    )
}

export default MetaPixel;