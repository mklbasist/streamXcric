"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const AnimatedNewsCarousel = ({
  newsCards = [],
  onCardClick = () => {},
}) => {
  const css = `
    .AnimatedNewsCarousel {
      padding-bottom: 50px !important;
    }
    
    .news-swiper-slide {
      border-radius: 24px;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      border: 1px solid rgba(71, 85, 105, 0.3);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: grab;
      overflow: hidden;
      position: relative;
    }
    
    .news-swiper-slide:active {
      cursor: grabbing;
    }
    
    .news-swiper-slide::before,
    .news-swiper-slide::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      opacity: 0.08;
      pointer-events: none;
    }
    
    .news-swiper-slide::before {
      top: -80px;
      right: -80px;
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, #ef4444 0%, transparent 70%);
    }
    
    .news-swiper-slide::after {
      bottom: -60px;
      left: -60px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
    }
    
    .news-card-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      height: 100%;
    }
    
    .news-card-header {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    
    .news-card-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #fca5a5;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .news-card-title {
      font-size: 1.35rem;
      font-weight: 800;
      line-height: 1.25;
      color: white;
      letter-spacing: -0.5px;
      margin: 0;
    }
    
    .news-card-image {
      width: 100%;
      height: 120px;
      border-radius: 14px;
      object-fit: cover;
      object-position: center;
      margin: 0.5rem 0 0.8rem 0;
      display: block;
    }
    
    .news-card-description {
      font-size: 0.9rem;
      color: #cbd5e1;
      line-height: 1.5;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .news-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      border-top: 1px solid rgba(71, 85, 105, 0.2);
      padding-top: 1rem;
      margin-top: auto;
    }
    
    .news-card-meta {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      flex: 1;
    }
    
    .news-card-time {
      font-size: 0.75rem;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      white-space: nowrap;
    }
    
    .news-card-source {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      color: #06b6d4;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      white-space: nowrap;
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <style>{css}</style>

      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="AnimatedNewsCarousel h-[420px] w-[300px]"
      >
        {newsCards.map((news, index) => (
          <SwiperSlide key={index} className="news-swiper-slide">
            <div 
              className="news-card-content"
              onClick={() => {
                if (news.link) window.open(news.link, '_blank');
              }}
            >
              <div className="news-card-header">
                <div className="news-card-badge">
                  {news.isBold ? "⚡ Breaking" : "📰 News"}
                </div>
                <h3 className="news-card-title">{news.title}</h3>
              </div>

              {news.image && (
                <img
                  src={news.image}
                  alt={news.title}
                  className="news-card-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}

              <p className="news-card-description">{news.description}</p>

              <div className="news-card-footer">
                <div className="news-card-meta">
                  <span className="news-card-time">
                    🕐 {formatTime(news.pubDate)}
                  </span>
                  <span className="news-card-source">
                    {news.source}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

function formatTime(date) {
  const now = new Date();
  const diff = now - new Date(date);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(date).toLocaleDateString();
}

export { AnimatedNewsCarousel };
