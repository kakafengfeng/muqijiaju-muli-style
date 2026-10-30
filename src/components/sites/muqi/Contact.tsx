import { MapPin, Phone, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { asset } from "@/lib/site";

/** 联系：全屏底图 + 地址电话邮箱 */
export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-[92vh] w-full items-center overflow-hidden">
      <img
        src={asset("/images/projects/jindi-3.jpg")}
        alt="木栖家居体验"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 lg:px-10">
        <Reveal>
          <p className="mb-6 text-xs font-light tracking-[0.5em] text-cream/70">CONTACT</p>
          <h2 className="text-4xl font-light tracking-[0.2em] text-cream lg:text-5xl">联系我们</h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-cream/75">
            木栖家居科技（上海）有限公司
            <br />
            欢迎莅临展厅，亲身感受木作的温度。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-4 border border-cream/25 bg-cream/5 p-8 backdrop-blur-sm">
              <MapPin className="h-6 w-6 text-sand" strokeWidth={1.5} />
              <h3 className="text-sm font-light tracking-[0.35em] text-cream/80">地址</h3>
              <p className="text-lg font-light leading-relaxed text-cream">上海市徐汇区宜山路家饰佳4033展位</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex h-full flex-col gap-4 border border-cream/25 bg-cream/5 p-8 backdrop-blur-sm">
              <Phone className="h-6 w-6 text-sand" strokeWidth={1.5} />
              <h3 className="text-sm font-light tracking-[0.35em] text-cream/80">电话</h3>
              <p className="text-lg font-light leading-relaxed text-cream">
                021-54242017
                <br />
                15801948991
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex h-full flex-col gap-4 border border-cream/25 bg-cream/5 p-8 backdrop-blur-sm">
              <Mail className="h-6 w-6 text-sand" strokeWidth={1.5} />
              <h3 className="text-sm font-light tracking-[0.35em] text-cream/80">邮箱</h3>
              <p className="break-all text-lg font-light leading-relaxed text-cream">980763379@qq.com</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
