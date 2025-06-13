import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CopyIcon from '../assets/images/copy_icon.png'

const allOrders = [
  {
    type: 'Accept',
    status: 'Completed',
    amount: '$121,121,254.99',
    price: '$63,254.99',
    quantity: '21156413121 BTC',
    order: '2112121312312312312313',
    time: '23:01:2025 12:00pm',
  },
  {
    type: 'Deal',
    status: 'Cancelled',
    amount: '$121,121,254.99',
    price: '$63,254.99',
    quantity: '21156413121 BTC',
    order: '2112121312312312312313',
    time: '23:01:2025 12:00pm',
  },
   {
    type: 'Processing',
    status: 'Processing',
    amount: '$121,121,254.99',
    price: '$63,254.99',
    quantity: '21156413121 BTC',
    order: '2112121312312312312313',
    time: '23:01:2025 12:00pm',
  },
];

const processingOrders = [
  {
    type: 'Accept',
    status: 'Processing',
    amount: '$99,000,000.00',
    price: '$50,000.00',
    quantity: '200000 BTC',
    order: '321321321321',
  },
];

const profitLossStatements = [
   {
    type: 'Accept',
    status: 'Completed',
    amount: '$121,121,254.99',
    price: '$63,254.99',
    quantity: '21156413121 BTC',
    order: '2112121312312312312313',
    time: '23:01:2025 12:00pm',
  },
  {
    type: 'Deal',
    status: 'Cancelled',
    amount: '$121,121,254.99',
    price: '$63,254.99',
    quantity: '21156413121 BTC',
    order: '2112121312312312312313',
    time: '23:01:2025 12:00pm',
  },
];

const Orders = () => {
  const [tab, setTab] = useState('all_orders');
  const [filter, setFilter] = useState('all');

  const filteredAllOrders =
  filter === 'cancelled'
    ? allOrders.filter((order) => order.status === 'Cancelled')
    : filter === 'completed'
    ? allOrders.filter((order) => order.status === 'Completed')
    : allOrders;

  return (
    <div className="max-w-[600px] mx-auto w-full bg-[var(--primary)]">
      <div className="min-h-screen flex flex-col items-center bg-white text-black">
        <div className="h-[calc(100vh_-_56px)] overflow-auto w-full bg-[var(--primary)]">
          <Header />
          <div className="w-full bg-[var(--primary)] rounded-t-xl relative z-[1] overflow-auto">
            <div className="w-full pt-3">
              {/* Tabs */}
              <div className="flex border-b border-[var(--border-light)] px-4 gap-4 mb-4">
                {[
                  { key: 'all_orders', label: 'All Orders' },
                  { key: 'processing', label: 'Processing' },
                  { key: 'pl-statement', label: 'Profit & Loss Statement' },
                ].map((item) => (
                  <button
                    key={item.key}
                    className={`pb-2 text-base font-semibold ${
                      tab === item.key
                        ? 'border-b-2 border-blue-500 text-black'
                        : 'text-[var(--text-color)]'
                    }`}
                    onClick={() => setTab(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Filters (only for all_orders) */}
             {tab === 'all_orders' && (
  <div className="flex px-4 mb-4">
    <button
      className={`px-3 rounded ${
        filter === 'all'
          ? 'bg-[#DCDCDC]  text-black'
          : 'text-sm font-normal text-black'
      }`}
      onClick={() => setFilter('all')}
    >
      All
    </button>
    <button
      className={`px-3 rounded ${
        filter === 'completed'
          ? 'bg-[#DCDCDC]'
          : 'text-sm font-normal text-black'
      }`}
      onClick={() => setFilter('completed')}
    >
      Completed
    </button>
    <button
      className={`px-3 rounded ${
        filter === 'cancelled'
          ? 'bg-[#DCDCDC]'
          : 'text-sm font-normal text-black'
      }`}
      onClick={() => setFilter('cancelled')}
    >
      Cancelled
    </button>
  </div>
)}

              {/* Tab Content */}
              <div className="w-full px-4">
                {tab === 'all_orders' &&
                  filteredAllOrders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                  ))}

                {tab === 'processing' &&
                  processingOrders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                  ))}

                {tab === 'pl-statement' &&
                  profitLossStatements.map((order, index) => (
                    <div
                      key={index}
                      className="border-b border-[var(--border-light)] pb-3 mb-3 text-sm"
                    >
                    <div className="flex justify-between items-center mb-1">
      <span
        className={`font-semibold ${
          order.type === 'Accept'
            ? 'text-green-500'
            : order.type === 'Deal'
            ? 'text-red-500'
            : order.type === 'Processing'
            ? 'text-yellow-500'
            : 'text-white'
        }`}
      >
        {order.type}<span className='pl-1 text-black'>btn</span>
      </span>
      <span
        className={`px-2 py-0.5 text-xs rounded-sm ${
          order.status === 'Completed'
            ? 'bg-blue-100 text-blue-600'
            : order.status === 'Processing'
            ? 'bg-yellow-100 text-yellow-600'
            : 'bg-red-100 text-red-600'
        }`}
      >
        {order.status}
      </span>
    </div>
                     <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Amount</div>
      <div className="text-black text-sm">{order.amount}</div>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Price</div>
      <div className="text-black text-sm">{order.price}</div>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Quantity</div>
      <div className="text-black text-sm">{order.quantity}</div>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Order</div>
      <div className="text-black text-sm flex items-center gap-2">
        {order.order}
        <span><img src={CopyIcon} /></span>
      </div>
    </div>

    {/* Show Time only for Accept orders */}
    {order.type === 'Accept' && (order.status === 'Completed' || order.status === 'Cancelled') && (
  <div className="flex justify-between items-center mb-1">
    <div className="text-[var(--text-color)] text-sm">Time</div>
    <div className="text-[var(--text-color)] text-sm">{order.time}</div>
  </div>
  
)}
{order.type === 'Deal' && (order.status === 'Completed' || order.status === 'Cancelled') && (
  <div className="flex justify-between items-center mb-1">
    <div className="text-[var(--text-color)] text-sm">Time</div>
    <div className="text-[var(--text-color)] text-sm">{order.time}</div>
  </div>
  
)}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const OrderCard = ({ order }) => (
  <div className="border-b border-[var(--border-light)] pb-3 mb-3 text-sm">
    <div className="flex justify-between items-center mb-1">
      <span
        className={`font-semibold ${
          order.type === 'Accept'
            ? 'text-green-500'
            : order.type === 'Deal'
            ? 'text-red-500'
            : order.type === 'Processing'
            ? 'text-yellow-500'
            : 'text-white'
        }`}
      >
        {order.type}<span className='pl-1 text-black'>btn</span>
      </span>
      <span
        className={`px-2 py-0.5 text-xs rounded-sm ${
          order.status === 'Completed'
            ? 'bg-blue-100 text-blue-600'
            : order.status === 'Processing'
            ? 'bg-yellow-100 text-yellow-600'
            : 'bg-red-100 text-red-600'
        }`}
      >
        {order.status}
      </span>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Amount</div>
      <div className="text-black text-sm">{order.amount}</div>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Price</div>
      <div className="text-black text-sm">{order.price}</div>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Quantity</div>
      <div className="text-black text-sm">{order.quantity}</div>
    </div>

    <div className="flex justify-between items-center mb-1">
      <div className="text-[var(--text-color)] text-sm">Order</div>
      <div className="text-black text-sm flex items-center gap-2">
        {order.order}
        <span><img src={CopyIcon} /></span>
      </div>
    </div>

    {/* Show Time only for Accept orders */}
    {order.type === 'Accept' && (order.status === 'Completed' || order.status === 'Cancelled') && (
  <div className="flex justify-between items-center mb-1">
    <div className="text-[var(--text-color)] text-sm">Time</div>
    <div className="text-[var(--text-color)] text-sm">{order.time}</div>
  </div>
  
)}
{order.type === 'Deal' && (order.status === 'Completed' || order.status === 'Cancelled') && (
  <div className="flex justify-between items-center mb-1">
    <div className="text-[var(--text-color)] text-sm">Time</div>
    <div className="text-[var(--text-color)] text-sm">{order.time}</div>
  </div>
  
)}
  </div>
);

export default Orders;
