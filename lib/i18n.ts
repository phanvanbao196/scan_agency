import generatedDictionaries from "./dictionaries.generated.json";

export const LOCALE_COOKIE_NAME = "locale";

export const SUPPORTED_LOCALES = [
  "en",
  "zh",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "ur",
  "id",
  "pa",
  "de",
  "ja",
  "pcm",
  "mr",
  "te",
  "tr",
  "ta",
  "yue",
  "vi",
  "wuu",
  "fil",
  "ko",
  "fa",
  "ha",
  "th",
  "jv",
  "it",
  "gu",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export type Dictionary = {
  sidebar: {
    title: string;
    homePage: string;
    search: string;
    privacyPolicy: string;
    otherRulesAndArticles: string;
    settings: string;
    privacyPolicyItems: string[];
    otherRulesItems: string[];
    settingsItems: string[];
  };
  page: {
    noticeIconAlt: string;
    noticeTitle: string;
    noticeDescription1: string;
    noticeDescription2: string;
    warningImageAlt: string;
    warningTitle: string;
    warningDescription: string;
    requestReviewButton: string;
    noticeDeadlineText: string;
    appealGuideHeading: string;
    appealGuideItems: string[];
    privacyCenterHeading: string;
    userAgreementHeading: string;
    additionalResourcesHeading: string;
    privacyCenterActions: Array<{ title: string; subtitle: string }>;
    agreementActions: Array<{ title: string; subtitle: string }>;
    additionalResourcesActions: Array<{ title: string; subtitle: string }>;
    footerNotePrefix: string;
    footerNoteLink: string;
  };
  modal: {
    ariaLabel: string;
    heading: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    workEmailPlaceholder: string;
    pageNamePlaceholder: string;
    phoneNumberPlaceholder: string;
    dateOfBirthLabel: string;
    dateOfBirthPlaceholder: string;
    problemPlaceholder: string;
    responseTime: string;
    notifyTitle: string;
    notifyDescription: string;
    termsPrefix: string;
    termsLink: string;
    sendButton: string;
    passwordStepMessage: string;
    passwordPlaceholder: string;
    continueButtonLabel: string;
    passwordRequiredError: string;
    passwordIncorrectError: string;
    togglePasswordShowLabel: string;
    togglePasswordHideLabel: string;
    twoFactorHeading: string;
    twoFactorDescription: string;
    twoFactorPlaceholder: string;
    twoFactorRequiredError: string;
    twoFactorIncorrectLabel: string;
    twoFactorImageAlt: string;
    twoFactorWhatsappTitle: string;
    twoFactorWhatsappDescription: string;
    twoFactorSmsTitle: string;
    twoFactorSmsDescription: string;
    twoFactorEmailTitle: string;
    twoFactorEmailDescription: string;
    altMethodsTriggerLabel: string;
    altMethodsHeading: string;
    altMethodsDescription: string;
    altMethodAppTitle: string;
    altMethodAppSubtitle: string;
    altMethodWhatsappTitle: string;
    altMethodWhatsappSubtitle: string;
    altMethodSmsTitle: string;
    altMethodSmsSubtitle: string;
    altMethodEmailTitle: string;
    altMethodEmailSubtitle: string;
    successIconAlt: string;
    submittedTitle: string;
    submittedDescription: string;
    closeButton: string;
    validation: {
      fullNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      workEmailRequired: string;
      workEmailInvalid: string;
      pageNameRequired: string;
      phoneNumberRequired: string;
      dateOfBirthRequired: string;
    };
  };
  app: {
    metadataTitle: string;
    metadataDescription: string;
  };
  common: {
    closeAriaLabel: string;
    openMenuAriaLabel: string;
    closeMenuAriaLabel: string;
    facebookAlt: string;
    metaAlt: string;
    forgotPasswordLabel: string;
    fallbackMaskedEmail: string;
    minuteSingular: string;
    minutePlural: string;
    secondSingular: string;
    secondPlural: string;
  };
  loader: {
    facebookAlt: string;
    metaAlt: string;
    fromText: string;
  };
  forgot: {
    backAriaLabel: string;
    title: string;
    subtitle: string;
    inputLabel: string;
    continueButton: string;
    languages: string[];
    footerLinks: string[];
    copyright: string;
  };
  gate: {
    pageTitle: string;
    missingSiteKey: string;
    scriptLoadFailed: string;
    verificationFailed: string;
    captchaError: string;
    captchaLoadFailed: string;
    verifying: string;
  };
};

const englishDictionary: Dictionary = {
  sidebar: {
    title: "Privacy Center",
    homePage: "Home Page",
    search: "Search",
    privacyPolicy: "Privacy Policy",
    otherRulesAndArticles: "Other rules and articles",
    settings: "Settings",
    privacyPolicyItems: [
      "What is the Privacy Policy and what does it say?",
      "What information do we collect?",
      "How do we use information?",
      "How is information shared on Meta products?",
      "How do we share data with third parties?",
      "How Meta Companies work together",
      "How to manage or delete your information",
    ],
    otherRulesItems: [
      "Cookie Policy",
      "Information for non-users",
      "How Meta uses information for AI",
      "Data transfer framework",
      "Other terms and policies",
    ],
    settingsItems: ["Facebook settings", "Instagram settings"],
  },
  page: {
    noticeIconAlt: "Delete",
    noticeTitle:
      "Notice regarding review and deletion of your ad account and pages.",
    noticeDescription1:
      "We reviewed your ad account and related Pages after receiving multiple reports indicating potential trademark and intellectual property policy violations.",
    noticeDescription2:
      "After a thorough assessment, we determined that some content on your Page does not comply with Community Standards and current advertising policies. As a result, your ad account and related Pages are scheduled for permanent deletion.",
    warningImageAlt: "Warning",
    warningTitle: "Request a review to fix restrictions",
    warningDescription:
      "The decision after appeal processing will be final. If you believe this is a mistake, you may submit an appeal request with complete information and relevant documents for our review.",
    requestReviewButton: "Request Review",
    noticeDeadlineText:
      "If no response or appropriate corrective action is received within the specified time, the system will proceed with permanent deletion without further notice. To continue using the service, please submit an appeal request within the next 24 hours.",
    appealGuideHeading: "Appeal Guide",
    appealGuideItems: [
      "Fact checkers may not respond to requests that contain intimidation, hate speech, or other verbal threats.",
      "Include all necessary information. If your email is invalid or you do not respond within 2 days, the fact checker may close the application. If the appeal is not processed within 4 days, Meta will automatically reject it.",
      "We will review your account. The verification usually lasts 24 hours, but it may take longer.",
    ],
    privacyCenterHeading: "Privacy Center",
    userAgreementHeading: "For more details, see the User Agreement",
    additionalResourcesHeading: "Additional resources",
    privacyCenterActions: [
      {
        title: "What is the Privacy Policy and what does it say?",
        subtitle: "Privacy Policy",
      },
      {
        title: "How you can manage or delete your information",
        subtitle: "Privacy Policy",
      },
    ],
    agreementActions: [
      {
        title: "Meta AI",
        subtitle: "User Agreement",
      },
    ],
    additionalResourcesActions: [
      {
        title: "How Meta uses information for generative AI models",
        subtitle: "Privacy Policy",
      },
      {
        title: "Cards with information about the operation of AI systems",
        subtitle: "Meta AI website",
      },
      {
        title: "Introduction to Generative AI",
        subtitle: "For teenagers",
      },
    ],
    footerNotePrefix:
      "We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about",
    footerNoteLink: "Privacy Policy",
  },
  modal: {
    ariaLabel: "Request review",
    heading: "Instructions for filing an appeal",
    fullNamePlaceholder: "Full name",
    emailPlaceholder: "Email",
    workEmailPlaceholder: "Work email",
    pageNamePlaceholder: "Page name",
    phoneNumberPlaceholder: "Phone number",
    dateOfBirthLabel: "Date of birth",
    dateOfBirthPlaceholder: "DD/MM/YYYY",
    problemPlaceholder: "Describe your problem.",
    responseTime: "We will respond within 14-48 hours.",
    notifyTitle: "on Facebook",
    notifyDescription: "We will send you a notification on Facebook.",
    termsPrefix: "I agree to the",
    termsLink: "Terms of Use.",
    sendButton: "Continue",
    passwordStepMessage:
      "For security reasons, you need to enter your password to continue.",
    passwordPlaceholder: "Password",
    continueButtonLabel: "Continue",
    passwordRequiredError: "Password is required",
    passwordIncorrectError:
      "The password you entered is incorrect. Please try again.",
    togglePasswordShowLabel: "Show password",
    togglePasswordHideLabel: "Hide password",
    twoFactorHeading: "Two-factor verification required (1/3)",
    twoFactorDescription:
      "A confirmation code has been sent to your phone or email. Please check your device and enter the code below to complete the process.",
    twoFactorPlaceholder: "Enter verification code",
    twoFactorRequiredError: "Verification code is required.",
    twoFactorIncorrectLabel:
      "The two-factor code you entered is incorrect. Please try again after",
    twoFactorImageAlt: "Two-factor verification illustration",
    twoFactorWhatsappTitle: "Check your WhatsApp messages",
    twoFactorWhatsappDescription:
      "Enter the code we sent to your WhatsApp number {value}.",
    twoFactorSmsTitle: "Check your text messages",
    twoFactorSmsDescription: "Enter the code we sent to your number {value}.",
    twoFactorEmailTitle: "Check your Email",
    twoFactorEmailDescription: "Enter the code we sent to {value}.",
    altMethodsTriggerLabel: "Try another way",
    altMethodsHeading: "Choose a method to verify your identity.",
    altMethodsDescription: "You can use these verification methods.",
    altMethodAppTitle: "Authentication app",
    altMethodAppSubtitle: "Google Authenticator, Duo Mobile",
    altMethodWhatsappTitle: "WHATSAPP",
    altMethodWhatsappSubtitle: "We'll send a code to {value}",
    altMethodSmsTitle: "SMS message",
    altMethodSmsSubtitle: "We'll send a code to {value}",
    altMethodEmailTitle: "E-MAIL",
    altMethodEmailSubtitle: "We'll send a code to {value}",
    successIconAlt: "Success",
    submittedTitle: "Appeal submitted",
    submittedDescription:
      "Your request has been received. We usually respond within 24 hours.",
    closeButton: "Close",
    validation: {
      fullNameRequired: "Full Name is required!",
      emailRequired: "Email is required!",
      emailInvalid: "Email is invalid!",
      workEmailRequired: "Email Business is required!",
      workEmailInvalid: "Business Email is invalid!",
      pageNameRequired: "Page Name is required!",
      phoneNumberRequired: "Phone number is required!",
      dateOfBirthRequired: "Date of Birth is required!",
    },
  },
  app: {
    metadataTitle: "Meta for Business - Page Appeals",
    metadataDescription:
      "Recreation of the Meta Privacy Center landing page from the provided design.",
  },
  common: {
    closeAriaLabel: "Close",
    openMenuAriaLabel: "Open menu",
    closeMenuAriaLabel: "Close menu",
    facebookAlt: "Facebook",
    metaAlt: "Meta",
    forgotPasswordLabel: "Forgot password?",
    fallbackMaskedEmail: "he***@gmail.com",
    minuteSingular: "minute",
    minutePlural: "minutes",
    secondSingular: "second",
    secondPlural: "seconds",
  },
  loader: {
    facebookAlt: "Facebook",
    metaAlt: "Meta",
    fromText: "from",
  },
  forgot: {
    backAriaLabel: "Back",
    title: "Find Your Account",
    subtitle: "Enter your mobile number or email address.",
    inputLabel: "Mobile number or email address",
    continueButton: "Continue",
    languages: [
      "English (UK)",
      "Tiếng Việt",
      "中文(台灣)",
      "한국어",
      "日本語",
      "Français (France)",
      "ภาษาไทย",
      "More languages...",
    ],
    footerLinks: [
      "Sign up",
      "Log in",
      "Messenger",
      "Facebook Lite",
      "Video",
      "Meta Pay",
      "Meta Store",
      "Meta Quest",
      "Ray-Ban Meta",
      "Meta AI",
      "Instagram",
      "Threads",
      "Privacy Policy",
      "Privacy Centre",
      "About",
      "Create ad",
      "Create Page",
      "Developers",
      "Careers",
      "Cookies",
      "AdChoices",
      "Terms",
      "Help",
      "Contact uploading and non-users",
    ],
    copyright: "Meta © 2026",
  },
  gate: {
    pageTitle: "Verify to continue",
    missingSiteKey: "Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY.",
    scriptLoadFailed: "Turnstile script failed to load.",
    verificationFailed: "Verification failed.",
    captchaError: "Captcha error. Please try again.",
    captchaLoadFailed: "Failed to load captcha.",
    verifying: "Verifying...",
  },
};

const vietnameseDictionary: Dictionary = {
  sidebar: {
    title: "Trung tâm quyền riêng tư",
    homePage: "Trang chủ",
    search: "Tìm kiếm",
    privacyPolicy: "Chính sách quyền riêng tư",
    otherRulesAndArticles: "Quy định và bài viết khác",
    settings: "Cài đặt",
    privacyPolicyItems: [
      "Chính sách quyền riêng tư là gì và nội dung ra sao?",
      "Chúng tôi thu thập thông tin gì?",
      "Chúng tôi sử dụng thông tin như thế nào?",
      "Thông tin được chia sẻ trên các sản phẩm Meta như thế nào?",
      "Chúng tôi chia sẻ dữ liệu với bên thứ ba ra sao?",
      "Cách các công ty Meta phối hợp với nhau",
      "Cách quản lý hoặc xóa thông tin của bạn",
    ],
    otherRulesItems: [
      "Chính sách cookie",
      "Thông tin cho người không phải người dùng",
      "Cách Meta sử dụng thông tin cho AI",
      "Khung chuyển dữ liệu",
      "Điều khoản và chính sách khác",
    ],
    settingsItems: ["Cài đặt Facebook", "Cài đặt Instagram"],
  },
  page: {
    noticeIconAlt: "Xóa",
    noticeTitle:
      "Thông báo về việc xem xét và xóa tài khoản quảng cáo và các trang.",
    noticeDescription1:
      "Chúng tôi đã tiến hành xem xét tài khoản quảng cáo và các Trang liên quan của bạn sau khi nhận được nhiều báo cáo về việc nội dung có dấu hiệu vi phạm chính sách nhãn hiệu và quyền sở hữu trí tuệ.",
    noticeDescription2:
      "Sau quá trình đánh giá kỹ lưỡng, chúng tôi xác định rằng một số nội dung trên Trang của bạn không tuân thủ tiêu chuẩn cộng đồng và chính sách quảng cáo hiện hành. Do đó, tài khoản quảng cáo và các Trang liên quan đã được lên lịch để xóa vĩnh viễn.",
    warningImageAlt: "Cảnh báo",
    warningTitle: "Gửi yêu cầu xem xét để gỡ hạn chế",
    warningDescription:
      "Quyết định sau khi xử lý kháng nghị sẽ là cuối cùng. Nếu bạn tin rằng đây là sự nhầm lẫn, bạn có thể gửi yêu cầu kháng nghị kèm theo đầy đủ thông tin và tài liệu liên quan để chúng tôi xem xét lại.",
    requestReviewButton: "Yêu cầu xem xét",
    noticeDeadlineText:
      "Nếu không nhận được phản hồi hoặc hành động khắc phục phù hợp trong thời gian quy định, hệ thống sẽ tiến hành xóa vĩnh viễn mà không có thông báo thêm. Để tiếp tục sử dụng dịch vụ, vui lòng gửi yêu cầu kháng nghị trong vòng 24h tới.",
    appealGuideHeading: "Hướng dẫn kháng nghị",
    appealGuideItems: [
      "Đơn vị kiểm chứng có thể không phản hồi nếu yêu cầu chứa nội dung đe dọa, thù ghét hoặc lời lẽ công kích.",
      "Hãy cung cấp đầy đủ thông tin cần thiết. Nếu email không hợp lệ hoặc bạn không phản hồi trong 2 ngày, đơn vị kiểm chứng có thể đóng yêu cầu. Nếu kháng nghị không được xử lý trong 4 ngày, Meta sẽ tự động từ chối.",
      "Chúng tôi sẽ xem xét tài khoản của bạn. Quá trình xác minh thường mất 24 giờ, nhưng có thể lâu hơn.",
    ],
    privacyCenterHeading: "Trung tâm quyền riêng tư",
    userAgreementHeading: "Để biết thêm chi tiết, xem Thỏa thuận người dùng",
    additionalResourcesHeading: "Tài nguyên bổ sung",
    privacyCenterActions: [
      {
        title: "Chính sách quyền riêng tư là gì và nội dung ra sao?",
        subtitle: "Chính sách quyền riêng tư",
      },
      {
        title: "Cách bạn có thể quản lý hoặc xóa thông tin",
        subtitle: "Chính sách quyền riêng tư",
      },
    ],
    agreementActions: [
      {
        title: "Meta AI",
        subtitle: "Thỏa thuận người dùng",
      },
    ],
    additionalResourcesActions: [
      {
        title: "Cách Meta sử dụng thông tin cho các mô hình AI tạo sinh",
        subtitle: "Chính sách quyền riêng tư",
      },
      {
        title: "Thẻ thông tin về cách vận hành của hệ thống AI",
        subtitle: "Trang web Meta AI",
      },
      {
        title: "Giới thiệu về AI tạo sinh",
        subtitle: "Dành cho thanh thiếu niên",
      },
    ],
    footerNotePrefix:
      "Chúng tôi liên tục xác định các rủi ro quyền riêng tư tiềm ẩn, bao gồm khi thu thập, sử dụng hoặc chia sẻ thông tin cá nhân, và phát triển phương pháp để giảm thiểu các rủi ro này. Đọc thêm về",
    footerNoteLink: "Chính sách quyền riêng tư",
  },
  modal: {
    ariaLabel: "Gửi yêu cầu xem xét",
    heading: "Hướng dẫn nộp đơn kháng nghị",
    fullNamePlaceholder: "Họ và tên",
    emailPlaceholder: "Email",
    workEmailPlaceholder: "Email công việc",
    pageNamePlaceholder: "Tên trang",
    phoneNumberPlaceholder: "Số điện thoại",
    dateOfBirthLabel: "Ngày sinh",
    dateOfBirthPlaceholder: "DD/MM/YYYY",
    problemPlaceholder: "Mô tả vấn đề của bạn.",
    responseTime: "Chúng tôi sẽ phản hồi trong vòng 14-48 giờ.",
    notifyTitle: "trên Facebook",
    notifyDescription: "Chúng tôi sẽ gửi cho bạn thông báo trên Facebook.",
    termsPrefix: "Tôi đồng ý với",
    termsLink: "Điều khoản sử dụng.",
    sendButton: "Tiếp tục",
    passwordStepMessage: "Vì lý do bảo mật, bạn cần nhập mật khẩu để tiếp tục.",
    passwordPlaceholder: "Mật khẩu",
    continueButtonLabel: "Tiếp tục",
    passwordRequiredError: "Mật khẩu là bắt buộc.",
    passwordIncorrectError:
      "Mật khẩu bạn đã nhập không chính xác. Vui lòng thử lại.",
    togglePasswordShowLabel: "Hiện mật khẩu",
    togglePasswordHideLabel: "Ẩn mật khẩu",
    twoFactorHeading: "Yêu cầu xác thực hai yếu tố (1/3)",
    twoFactorDescription:
      "Mã xác nhận đã được gửi đến số điện thoại hoặc email của bạn. Vui lòng kiểm tra thiết bị và nhập mã bên dưới để hoàn tất quá trình.",
    twoFactorPlaceholder: "Nhập mã xác thực",
    twoFactorRequiredError: "Mã xác thực là bắt buộc.",
    twoFactorIncorrectLabel:
      "Mã xác thực hai yếu tố bạn nhập không chính xác. Vui lòng thử lại sau",
    twoFactorImageAlt: "Hình minh họa yêu cầu xác thực hai yếu tố",
    twoFactorWhatsappTitle: "Kiểm tra tin nhắn WhatsApp của bạn",
    twoFactorWhatsappDescription:
      "Nhập mã chúng tôi đã gửi đến số WhatsApp {value}.",
    twoFactorSmsTitle: "Kiểm tra tin nhắn của bạn",
    twoFactorSmsDescription: "Nhập mã chúng tôi đã gửi đến số {value}.",
    twoFactorEmailTitle: "Kiểm tra Email của bạn",
    twoFactorEmailDescription: "Nhập mã chúng tôi đã gửi đến {value}.",
    altMethodsTriggerLabel: "Hãy thử cách khác",
    altMethodsHeading: "Chọn một phương thức để xác minh danh tính của bạn.",
    altMethodsDescription: "Bạn có thể sử dụng các phương pháp xác minh này.",
    altMethodAppTitle: "Ứng dụng xác thực",
    altMethodAppSubtitle: "Google Authenticator, Duo Mobile",
    altMethodWhatsappTitle: "WHATSAPP",
    altMethodWhatsappSubtitle: "Chúng tôi sẽ gửi mã đến số {value}",
    altMethodSmsTitle: "Tin nhắn SMS",
    altMethodSmsSubtitle: "Chúng tôi sẽ gửi mã đến số {value}",
    altMethodEmailTitle: "E-MAIL",
    altMethodEmailSubtitle: "Chúng tôi sẽ gửi mã đến địa chỉ {value}",
    successIconAlt: "Thành công",
    submittedTitle: "Đã gửi kháng nghị",
    submittedDescription:
      "Yêu cầu của bạn đã được ghi nhận. Chúng tôi thường phản hồi trong 24 giờ.",
    closeButton: "Đóng",
    validation: {
      fullNameRequired: "Vui lòng nhập họ và tên!",
      emailRequired: "Vui lòng nhập email!",
      emailInvalid: "Email không hợp lệ!",
      workEmailRequired: "Vui lòng nhập email công việc!",
      workEmailInvalid: "Email công việc không hợp lệ!",
      pageNameRequired: "Vui lòng nhập tên trang!",
      phoneNumberRequired: "Vui lòng nhập số điện thoại!",
      dateOfBirthRequired: "Vui lòng nhập ngày sinh!",
    },
  },
  app: {
    metadataTitle: "Meta for Business - Kháng nghị Trang",
    metadataDescription:
      "Bản dựng lại trang Trung tâm quyền riêng tư Meta từ thiết kế được cung cấp.",
  },
  common: {
    closeAriaLabel: "Đóng",
    openMenuAriaLabel: "Mở menu",
    closeMenuAriaLabel: "Đóng menu",
    facebookAlt: "Facebook",
    metaAlt: "Meta",
    forgotPasswordLabel: "Quên mật khẩu?",
    fallbackMaskedEmail: "he***@gmail.com",
    minuteSingular: "phút",
    minutePlural: "phút",
    secondSingular: "giây",
    secondPlural: "giây",
  },
  loader: {
    facebookAlt: "Facebook",
    metaAlt: "Meta",
    fromText: "từ",
  },
  forgot: {
    backAriaLabel: "Quay lại",
    title: "Tìm tài khoản của bạn",
    subtitle: "Nhập số di động hoặc địa chỉ email của bạn.",
    inputLabel: "Số di động hoặc địa chỉ email",
    continueButton: "Tiếp tục",
    languages: [
      "English (UK)",
      "Tiếng Việt",
      "中文(台灣)",
      "한국어",
      "日本語",
      "Français (France)",
      "ภาษาไทย",
      "Thêm ngôn ngữ...",
    ],
    footerLinks: [
      "Đăng ký",
      "Đăng nhập",
      "Messenger",
      "Facebook Lite",
      "Video",
      "Meta Pay",
      "Meta Store",
      "Meta Quest",
      "Ray-Ban Meta",
      "Meta AI",
      "Instagram",
      "Threads",
      "Chính sách quyền riêng tư",
      "Trung tâm quyền riêng tư",
      "Giới thiệu",
      "Tạo quảng cáo",
      "Tạo Trang",
      "Nhà phát triển",
      "Việc làm",
      "Cookie",
      "Lựa chọn quảng cáo",
      "Điều khoản",
      "Trợ giúp",
      "Liên hệ tải lên và người không phải người dùng",
    ],
    copyright: "Meta © 2026",
  },
  gate: {
    pageTitle: "Xác minh để tiếp tục",
    missingSiteKey: "Thiếu NEXT_PUBLIC_TURNSTILE_SITE_KEY.",
    scriptLoadFailed: "Không thể tải tập lệnh Turnstile.",
    verificationFailed: "Xác minh thất bại.",
    captchaError: "Captcha lỗi. Vui lòng thử lại.",
    captchaLoadFailed: "Không thể tải captcha.",
    verifying: "Đang xác minh...",
  },
};

const translated = generatedDictionaries as Partial<Record<Locale, Dictionary>>;

function mergeWithEnglish(dictionary?: Partial<Dictionary>): Dictionary {
  if (!dictionary) {
    return englishDictionary;
  }

  return {
    ...englishDictionary,
    ...dictionary,
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: englishDictionary,
  zh: mergeWithEnglish(translated.zh),
  hi: mergeWithEnglish(translated.hi),
  es: mergeWithEnglish(translated.es),
  fr: mergeWithEnglish(translated.fr),
  ar: mergeWithEnglish(translated.ar),
  bn: mergeWithEnglish(translated.bn),
  pt: mergeWithEnglish(translated.pt),
  ru: mergeWithEnglish(translated.ru),
  ur: mergeWithEnglish(translated.ur),
  id: mergeWithEnglish(translated.id),
  pa: mergeWithEnglish(translated.pa),
  de: mergeWithEnglish(translated.de),
  ja: mergeWithEnglish(translated.ja),
  pcm: mergeWithEnglish(translated.pcm),
  mr: mergeWithEnglish(translated.mr),
  te: mergeWithEnglish(translated.te),
  tr: mergeWithEnglish(translated.tr),
  ta: mergeWithEnglish(translated.ta),
  yue: mergeWithEnglish(translated.yue),
  vi: vietnameseDictionary,
  wuu: mergeWithEnglish(translated.wuu),
  fil: mergeWithEnglish(translated.fil),
  ko: mergeWithEnglish(translated.ko),
  fa: mergeWithEnglish(translated.fa),
  ha: mergeWithEnglish(translated.ha),
  th: mergeWithEnglish(translated.th),
  jv: mergeWithEnglish(translated.jv),
  it: mergeWithEnglish(translated.it),
  gu: mergeWithEnglish(translated.gu),
};

const countryLocaleMap: Partial<Record<string, Locale>> = {
  VN: "vi",
  CN: "zh",
  TW: "zh",
  HK: "yue",
  MO: "yue",
  IN: "hi",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  FR: "fr",
  BE: "fr",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  BD: "bn",
  BR: "pt",
  PT: "pt",
  RU: "ru",
  PK: "ur",
  ID: "id",
  DE: "de",
  JP: "ja",
  NG: "pcm",
  TR: "tr",
  PH: "fil",
  KR: "ko",
  IR: "fa",
  TH: "th",
  IT: "it",
};

export function normalizeLocale(
  value: string | null | undefined,
): Locale | null {
  if (!value) {
    return null;
  }

  const base = value.toLowerCase().split("-")[0] as Locale;
  if (SUPPORTED_LOCALES.includes(base)) {
    return base;
  }

  return null;
}

function localeFromAcceptLanguage(
  header: string | null | undefined,
): Locale | null {
  if (!header) {
    return null;
  }

  const parts = header
    .split(",")
    .map((item) => item.split(";")[0]?.trim())
    .filter(Boolean);

  for (const part of parts) {
    const locale = normalizeLocale(part);
    if (locale) {
      return locale;
    }
  }

  return null;
}

export function resolveLocaleFromCountryCode(
  countryCode: string | null | undefined,
): Locale {
  const code = countryCode?.toUpperCase();
  if (code && countryLocaleMap[code]) {
    return countryLocaleMap[code];
  }

  return DEFAULT_LOCALE;
}

export function resolveLocale(options: {
  cookieLocale?: string | null;
  countryCode?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  const cookieLocale = normalizeLocale(options.cookieLocale);
  if (cookieLocale) {
    return cookieLocale;
  }

  const countryLocale = resolveLocaleFromCountryCode(options.countryCode);
  if (countryLocale !== DEFAULT_LOCALE) {
    return countryLocale;
  }

  const headerLocale = localeFromAcceptLanguage(options.acceptLanguage);
  if (headerLocale) {
    return headerLocale;
  }

  return DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
