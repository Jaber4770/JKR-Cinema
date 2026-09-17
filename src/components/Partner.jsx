import pic1 from "./../assets/1.webp";
import pic2 from "./../assets/2.webp";
import pic3 from "./../assets/3.webp";
import pic4 from "./../assets/4.webp";
import pic5 from "./../assets/5.webp";
import pic6 from "./../assets/6.webp";

const partners = [pic1, pic2, pic3, pic4, pic5, pic6];

export default function Partner() {
  return <>
    <section className="bg-white py-16 text-gray-900 border-t-2 border-b-2 border-gray-300 mb-5">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-center text-4xl font-bold mb-16">
          Proud Partners with:
        </h2>

        <div className="flex justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-28 h-24 flex items-center justify-center bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
            >
              <img
                src={partner}
                alt="Partner logo"
                className="max-w-[75%] max-h-[65%] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  </>;
}