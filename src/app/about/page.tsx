import Image from "next/image";

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="max-w-4xl mx-auto px-4 py-16 text-[var(--text)]"
    >
      <h1 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] animate-fadeIn">
        About Me
      </h1>

      <section className="flex flex-col md:flex-row gap-8 items-center animate-fadeIn">
        <div className="flex-shrink-0 w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/profile.PNG" 
            alt="Aisha Aliyu"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 space-y-4">
          <p>
            Hi! I’m <strong>Aisha Aliyu</strong>, a software engineer, game developer, and web enthusiast based in Kano, Nigeria.
          </p>
          <p>
            I specialize in building <strong>accessible web apps</strong>, immersive <strong>Unreal Engine games</strong>, and modern user interfaces that are responsive, elegant, and enjoyable to use.
          </p>
          <p>
            My goal is to create technology that is not only functional but also <strong>inclusive</strong>—so everyone can have a great experience regardless of ability.
          </p>
          <p>
            Outside of coding, I love exploring photography, storytelling, and experimenting with AI and blockchain technologies.
          </p>
        </div>
      </section>

      <section className="mt-12 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <li className="bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 text-purple-800 rounded-lg px-3 py-2 text-center shadow-sm">
            HTML & CSS
          </li>
          <li className="bg-gradient-to-r from-green-200 via-blue-200 to-indigo-200 text-green-800 rounded-lg px-3 py-2 text-center shadow-sm">
            JavaScript & TypeScript
          </li>
          <li className="bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 text-pink-800 rounded-lg px-3 py-2 text-center shadow-sm">
            React & Next.js
          </li>
          <li className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-800 rounded-lg px-3 py-2 text-center shadow-sm">
            Unreal Engine & Game Dev
          </li>
          <li className="bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 text-yellow-800 rounded-lg px-3 py-2 text-center shadow-sm">
            AI & Chatbots
          </li>
          <li className="bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 text-teal-800 rounded-lg px-3 py-2 text-center shadow-sm">
            AR/VR & 3D Modeling
          </li>
        </ul>
      </section>
    </main>
  );
}