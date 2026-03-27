// Core UI components
export {
  Button,
  buttonVariants,
  Badge,
  badgeVariants,
  Card,
  cardVariants,
  Menu,
  Drawer,
  Avatar,
  Tabs,
  Label,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  Select,
  Switch,
  Slider,
  Text,
  FormLayout,
  Link,
  linkVariants,
  Alert,
  alertVariants,
  IconButton,
  iconButtonVariants,
  Loader,
  loaderVariants,
  Dialog,
  dialogContentVariants,
  Divider,
  dividerVariants,
} from "@/components/ui";

export type {
  IButtonProps,
  IBadgeProps,
  ICardProps,
  IInputProps,
  ITextareaProps,
  ICheckboxProps,
  IRadioGroupItemProps,
  IFormLayoutProps,
  IFormSectionProps,
  IFormFieldProps,
  IFormRowProps,
  IFormActionsProps,
  ILinkProps,
  IAlertProps,
  IIconButtonProps,
  ILoaderProps,
  IDialogContentProps,
  IDividerProps,
} from "@/components/ui";

// Composite components
export { CardGrid } from "@/components/CardGrid";
export type { CardGridProps } from "@/components/CardGrid";

export { NavBar } from "@/components/NavBar";
export type {
  NavBarProps,
  NavLink,
  NavMenuItem,
  NavBrand,
  NavAuth,
} from "@/components/NavBar";

export { SimplePage } from "@/components/Page";
export type { SimplePageProps } from "@/components/Page";

export { SectionNav } from "@/components/SectionNav/SectionNav";
export type {
  SectionNavItem,
  ISectionNavProps,
} from "@/components/SectionNav/SectionNav";

export { TwoColumnLayout } from "@/components/TwoColumnLayout/TwoColumnLayout";

// Landing page components
export {
  Hero,
  Section,
  sectionVariants,
  Footer,
  PricingTable,
  FeatureSection,
  Testimonial,
  LogoCloud,
  CTABanner,
  FAQ,
  StatsBar,
  AnnouncementBanner,
  NewsletterSignup,
} from "@/components/landing";

export type {
  HeroProps,
  SectionProps,
  FooterProps,
  FooterLinkGroup,
  PricingTableProps,
  PricingTier,
  PricingFeature,
  FeatureSectionProps,
  Feature,
  TestimonialProps,
  TestimonialItem,
  LogoCloudProps,
  CTABannerProps,
  FAQProps,
  FAQItem,
  StatsBarProps,
  Stat,
  AnnouncementBannerProps,
  NewsletterSignupProps,
} from "@/components/landing";

// Utilities
export { cn } from "@/lib/utils";
