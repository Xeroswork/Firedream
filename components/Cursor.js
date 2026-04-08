import { useState, useEffect } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const over = (e) => {
      const tag = e.target.tagName;
      const role = e.target.getAttribute('role');
      setExpanded(tag === 'BUTTON' || tag === 'A' || role === 'button');
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [visible]);

  return (
    <div
      className={`${styles.cursor} ${expanded ? styles.expanded : ''} ${visible ? styles.visible : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
