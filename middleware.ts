import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

// 这个正则表达式 /((?!api|_next/static|_next/image|.*\.png$).*)/ 用于匹配 URL 路径，但排除特定的路径模式。让我们逐步解析这个正则表达式的含义：

// /：正则表达式的开始和结束分隔符。

// ((?! ... ).*)：这是一个负向前瞻（negative lookahead），用于确保某些模式不出现在匹配的字符串中。具体来说：

// (?! ... )：负向前瞻，表示如果括号内的模式匹配，则当前匹配失败。
// .*：匹配任意数量的任意字符（除了换行符）。
// api|_next/static|_next/image|.*\.png$：这是负向前瞻中要排除的模式，具体包括：

// api：匹配字符串 "api"。
// _next/static：匹配字符串 "_next/static"。
// _next/image：匹配字符串 "_next/image"。
// .*\.png$：匹配以 ".png" 结尾的任意字符串。
// .*：在负向前瞻之后，匹配任意数量的任意字符（除了换行符）。

// 总结
// 这个正则表达式的作用是匹配所有不包含以下模式的 URL 路径：

// 包含 "api"
// 包含 "_next/static"
// 包含 "_next/image"
// 以 ".png" 结尾
// 示例
// 匹配：

// /home
// /about
// /user/profile
// 不匹配：

// /api/users
// /_next/static/css/styles.css
// /_next/image/logo.png
// /images/photo.png
// 这个正则表达式通常用于 Next.js 等框架中，以排除特定路径的请求，例如 API 路径、静态资源路径和图片路径。
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
