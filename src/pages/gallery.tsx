'use client';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Collection } from '../components/collection';

export default function GalleryPage() {
  return (
    <div>
      <Header />
      <div className="">
        <p className="">The Bond Collection</p>
      </div>
    <Collection />
    <Footer />
    </div>
  );
}
