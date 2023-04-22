import React from 'react';

export default function App() {
  return (
    <footer className="text-center text-lg-left fixed-bottom">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &copy; {new Date().getFullYear()} Copyright: {'Quanotx Academy'}
      </div>
    </footer>
  );
}
