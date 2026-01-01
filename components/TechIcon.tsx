import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiLaravel,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNestjs,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiVite,
  SiWebpack,
  SiJest,
  SiPostman,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiDart,
  SiAmazon,
  SiGooglecloud,
  SiKubernetes,
  SiNginx,
  SiApache,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp, TbBrandGolang } from "react-icons/tb";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({
  name,
  size = 20,
  className = "",
}: TechIconProps) {
  const iconProps = {
    size,
    className: `${className}`,
  };

  // Normalize tech name for matching
  const normalizedName = name.toLowerCase().replace(/[.\s-]/g, "");

  // Map tech names to icons
  const iconMap: { [key: string]: JSX.Element } = {
    javascript: <SiJavascript {...iconProps} />,
    js: <SiJavascript {...iconProps} />,
    typescript: <SiTypescript {...iconProps} />,
    ts: <SiTypescript {...iconProps} />,
    python: <SiPython {...iconProps} />,
    php: <SiPhp {...iconProps} />,
    java: <FaJava {...iconProps} />,
    cpp: <TbBrandCpp {...iconProps} />,
    "c++": <TbBrandCpp {...iconProps} />,
    golang: <TbBrandGolang {...iconProps} />,
    go: <TbBrandGolang {...iconProps} />,
    dart: <SiDart {...iconProps} />,

    // Frontend
    react: <SiReact {...iconProps} />,
    reactjs: <SiReact {...iconProps} />,
    nextjs: <SiNextdotjs {...iconProps} />,
    "next.js": <SiNextdotjs {...iconProps} />,
    html: <SiHtml5 {...iconProps} />,
    html5: <SiHtml5 {...iconProps} />,
    css: <SiCss3 {...iconProps} />,
    css3: <SiCss3 {...iconProps} />,
    tailwind: <SiTailwindcss {...iconProps} />,
    tailwindcss: <SiTailwindcss {...iconProps} />,
    vite: <SiVite {...iconProps} />,
    webpack: <SiWebpack {...iconProps} />,

    // Backend
    nodejs: <SiNodedotjs {...iconProps} />,
    "node.js": <SiNodedotjs {...iconProps} />,
    laravel: <SiLaravel {...iconProps} />,
    express: <SiExpress {...iconProps} />,
    expressjs: <SiExpress {...iconProps} />,
    nestjs: <SiNestjs {...iconProps} />,

    // Mobile
    flutter: <SiFlutter {...iconProps} />,

    // Database
    mysql: <SiMysql {...iconProps} />,
    mongodb: <SiMongodb {...iconProps} />,
    postgresql: <SiPostgresql {...iconProps} />,
    postgres: <SiPostgresql {...iconProps} />,
    firebase: <SiFirebase {...iconProps} />,
    redis: <SiRedis {...iconProps} />,
    prisma: <SiPrisma {...iconProps} />,
    supabase: <SiSupabase {...iconProps} />,

    // DevOps & Tools
    docker: <SiDocker {...iconProps} />,
    git: <SiGit {...iconProps} />,
    postman: <SiPostman {...iconProps} />,
    jest: <SiJest {...iconProps} />,
    vercel: <SiVercel {...iconProps} />,
    kubernetes: <SiKubernetes {...iconProps} />,
    k8s: <SiKubernetes {...iconProps} />,
    nginx: <SiNginx {...iconProps} />,
    apache: <SiApache {...iconProps} />,

    // Cloud
    aws: <SiAmazon {...iconProps} />,
    amazon: <SiAmazon {...iconProps} />,
    gcp: <SiGooglecloud {...iconProps} />,
    googlecloud: <SiGooglecloud {...iconProps} />,

    // ML/AI
    tensorflow: <SiTensorflow {...iconProps} />,
    pytorch: <SiPytorch {...iconProps} />,
    opencv: <SiOpencv {...iconProps} />,

    // APIs
    graphql: <SiGraphql {...iconProps} />,
    restapi: <SiPostman {...iconProps} />,
    "restful api": <SiPostman {...iconProps} />,
  };

  // Try to find matching icon
  const icon = iconMap[normalizedName];

  if (icon) {
    return icon;
  }

  // Return null if no icon found
  return null;
}

export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-card text-text-secondary border border-dark-border hover:border-white/30 transition-all duration-300 group">
      <TechIcon
        name={name}
        size={16}
        className="group-hover:text-white transition-colors"
      />
      <span className="text-xs font-medium">{name}</span>
    </span>
  );
}
