const ContactUs = () => {
  return (
    <div className='FlexWrapper'>
      <div className='TwoColumns'>
        <div className='FlexWrapper'>
          <ul>
            <p>New River Nets</p>
            <p>140 Charles Creek Rd</p>
            <p>Sneads Ferry, N.C. 28460</p>
          </ul>
        </div>
        <div className='FlexWrapper'>
          <ul>
            <p>Tel: (910) 327-1231</p>
            <p>Fax: (910) 327-3136</p>
            <p>E-Mail: sales@newrivernets.com</p>
          </ul>
        </div>
      </div>
      <div>
        <h3>We Ship:</h3>
        <p>Via UPS or selected Freight Carrier</p>
      </div>
      <div>
        <h3>Orders:</h3>
        <p>
          Please email us at sales@newrivernets.com or call 910-327-1231 to
          place an order.
        </p>
      </div>
      <div>
        <h3>Payment:</h3>
        <p>
          We accept PayPal, Visa or Master Card, Personal or Business Check, or
          Money Order. Sorry, we do not ship COD.
        </p>
      </div>
      <div>
        <h3>Sales Tax:</h3>
        <p>
          We must collect North Carolina 7 % sales tax unless you establish
          other conditions at the time of the order.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
