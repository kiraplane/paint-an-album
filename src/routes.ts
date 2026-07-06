import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Paint an Album wiki routes
  Guides = '/guides',
  Codes = '/codes',
  HowToPlay = '/how-to-play',
  AlbumSearch = '/album-search',
  Tools = '/tools',
  Gamepasses = '/gamepasses',
  Download = '/download',
  Updates = '/updates',
  BeginnerGuide = '/guides/beginner-guide',
  CodesGuide = '/guides/codes-status-guide',
  AlbumSearchGuide = '/guides/album-search-live-database-guide',
  CleanPaintingGuide = '/guides/clean-album-cover-painting-guide',
  ColorPlanningGuide = '/guides/color-matching-and-block-planning-guide',
  MultiplayerGuide = '/guides/multiplayer-lobby-autosave-guide',
  GamepassesGuide = '/guides/gamepasses-paint-roller-no-hint-cooldown-guide',
  GalleryGuide = '/guides/gallery-camera-sharing-guide',
  CoverIdeasGuide = '/guides/best-album-cover-ideas-guide',
  ComparisonGuide = '/guides/paint-an-album-vs-paint-to-hide-guide',
  SafetyGuide = '/guides/official-links-safety-guide',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
