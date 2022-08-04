import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <div className='nearest'>
          Nearest rides
       <style jsx>{`
        .nearest {
          position: absolute;
          width: 118px;
          height: 22px;
          left: 43px;
          top: 113px;
        }
        p {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: #FFFFFF
        }
      `}</style>
      </div>
      <div className='upcoming'>
          Upcoming rides
       <style jsx>{`
        .upcoming {
          position: absolute;
          width: 164px;
          height: 22px;
          left: 205px;
          top: 113px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: #D0CBCB
        }
      `}</style>
      </div>
      <div className='past'>
          Past rides
       <style jsx>{`
        .past {
          position: absolute;
          width: 114px;
          height: 22px;
          left: 413px;
          top: 113px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          line-height: right;
          color: #D0CBCB
        }
      `}</style>
      </div>
    </div>
  );
}
