import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Terminal,
  Key,
  BookOpen,
  Zap,
  Shield,
  AlertTriangle,
  CheckCircle,
  Copy,
  ExternalLink,
  ChevronRight,
  Github,
  FileJson,
  Package,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Documentation | Ai Auto Soft Developer Hub",
  description:
    "Integrate Ai Auto Soft with your applications. Comprehensive API documentation for Busy ERP WhatsApp automation with OAuth 2.0 authentication, endpoints reference, and SDK libraries.",
  keywords: [
    "Ai Auto Soft API",
    "Busy ERP API",
    "WhatsApp Business API",
    "developer documentation",
    "API integration",
    "OAuth 2.0",
    "SDK",
  ],
  openGraph: {
    title: "API Documentation | Ai Auto Soft Developer Hub",
    description:
      "Integrate Ai Auto Soft with your applications. Comprehensive API documentation for Busy ERP WhatsApp automation.",
    type: "website",
  },
};

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/contacts",
    description: "Retrieve all contacts from your Busy ERP database",
  },
  {
    method: "POST",
    path: "/api/v1/messages",
    description: "Send a WhatsApp message to one or more contacts",
  },
  {
    method: "GET",
    path: "/api/v1/templates",
    description: "List all approved WhatsApp message templates",
  },
  {
    method: "POST",
    path: "/api/v1/reminders",
    description: "Create a new payment reminder campaign",
  },
  {
    method: "GET",
    path: "/api/v1/invoices",
    description: "Retrieve invoices from Busy ERP",
  },
  {
    method: "POST",
    path: "/api/v1/webhooks",
    description: "Configure webhooks for real-time event notifications",
  },
];

const sdks = [
  {
    name: "Node.js SDK",
    icon: Package,
    description: "Official Node.js library for server-side integration",
    href: "#node-sdk",
    command: "npm install @aiautosoft/sdk",
  },
  {
    name: "Python SDK",
    icon: Terminal,
    description: "Python library for AI and data science workflows",
    href: "#python-sdk",
    command: "pip install aiautosoft",
  },
  {
    name: "REST API",
    icon: FileJson,
    description: "Direct REST API access for any programming language",
    href: "#rest-api",
    command: "curl https://api.aiautosoft.com/v1",
  },
];

const errorCodes = [
  { code: "400", title: "Bad Request", description: "Invalid request parameters or malformed JSON." },
  { code: "401", title: "Unauthorized", description: "Missing or invalid authentication credentials." },
  { code: "403", title: "Forbidden", description: "You don't have permission to access this resource." },
  { code: "404", title: "Not Found", description: "The requested resource was not found." },
  { code: "429", title: "Rate Limited", description: "Too many requests. Please retry after some time." },
  { code: "500", title: "Server Error", description: "An unexpected error occurred on our servers." },
];

const CodeBlock = ({ code, language = "json" }: { code: string; language?: string }) => (
  <div className="relative bg-[#0F172A] rounded-xl overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 bg-[#1E293B] border-b border-gray-700">
      <span className="text-sm text-gray-400">{language}</span>
      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white h-8">
        <Copy className="w-4 h-4 mr-2" />
        Copy
      </Button>
    </div>
    <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
      <code>{code}</code>
    </pre>
  </div>
);

export default function ApiDocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        badge="Developer Hub"
        title="API "
        highlight="Documentation"
        subtitle="Integrate Ai Auto Soft with your applications. Build powerful WhatsApp automation workflows with our comprehensive API."
        primaryCta={{
          text: "Get API Key",
          href: "#get-api-key",
        }}
        secondaryCta={{
          text: "View on GitHub",
          href: "#github",
        }}
      />

      {/* Getting Started Section */}
      <section id="getting-started" className="py-12 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="rounded-xl shadow-lg border-0 sticky top-24">
                <CardHeader>
                  <CardTitle
                    className="text-lg font-semibold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Contents
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {[
                      { title: "Getting Started", href: "#getting-started" },
                      { title: "Authentication", href: "#authentication" },
                      { title: "Endpoints Reference", href: "#endpoints" },
                      { title: "SDKs & Libraries", href: "#sdks" },
                      { title: "Error Handling", href: "#errors" },
                      { title: "Rate Limits", href: "#rate-limits" },
                    ].map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-[#7C3AED] hover:bg-[#7C3AED]/5 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Start */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Quick Start
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Get started with the Ai Auto Soft API in just a few minutes. Follow these steps to make your first API call:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0F172A] mb-1">Create an Account</h4>
                        <p className="text-gray-600 text-sm">Sign up for an Ai Auto Soft account and verify your email.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0F172A] mb-1">Generate API Key</h4>
                        <p className="text-gray-600 text-sm">Navigate to Settings → API Keys and create a new key.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0F172A] mb-1">Make Your First Call</h4>
                        <p className="text-gray-600 text-sm">Use your API key to authenticate and start making requests.</p>
                      </div>
                    </div>
                  </div>

                  <CodeBlock
                    code={`curl -X GET "https://api.aiautosoft.com/v1/contacts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                    language="bash"
                  />
                </div>
              </div>

              {/* Authentication */}
              <div id="authentication">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Authentication
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Ai Auto Soft uses OAuth 2.0 for secure API authentication. All API requests must include a valid access token in the Authorization header.
                  </p>

                  <Card className="rounded-xl border border-gray-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#14B8A6]" />
                        OAuth 2.0 Flow
                      </h4>
                      <Tabs defaultValue="authorization" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-4">
                          <TabsTrigger value="authorization">Authorization Code</TabsTrigger>
                          <TabsTrigger value="client">Client Credentials</TabsTrigger>
                          <TabsTrigger value="refresh">Refresh Token</TabsTrigger>
                        </TabsList>
                        <TabsContent value="authorization" className="space-y-4">
                          <p className="text-gray-600 text-sm">
                            Use the authorization code flow for applications that need to access user data.
                          </p>
                          <CodeBlock
                            code={`// Step 1: Redirect user to authorization URL
const authUrl = "https://auth.aiautosoft.com/authorize?" +
  "response_type=code&" +
  "client_id=YOUR_CLIENT_ID&" +
  "redirect_uri=https://your-app.com/callback&" +
  "scope=read write";

// Step 2: Exchange code for access token
const response = await fetch("https://auth.aiautosoft.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "authorization_code",
    code: "AUTHORIZATION_CODE",
    client_id: "YOUR_CLIENT_ID",
    client_secret: "YOUR_CLIENT_SECRET",
    redirect_uri: "https://your-app.com/callback"
  })
});

const { access_token, refresh_token } = await response.json();`}
                            language="javascript"
                          />
                        </TabsContent>
                        <TabsContent value="client" className="space-y-4">
                          <p className="text-gray-600 text-sm">
                            Use client credentials for server-to-server authentication.
                          </p>
                          <CodeBlock
                            code={`const response = await fetch("https://auth.aiautosoft.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: "YOUR_CLIENT_ID",
    client_secret: "YOUR_CLIENT_SECRET",
    scope: "read write"
  })
});

const { access_token } = await response.json();`}
                            language="javascript"
                          />
                        </TabsContent>
                        <TabsContent value="refresh" className="space-y-4">
                          <p className="text-gray-600 text-sm">
                            Refresh expired access tokens without user interaction.
                          </p>
                          <CodeBlock
                            code={`const response = await fetch("https://auth.aiautosoft.com/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: "YOUR_REFRESH_TOKEN",
    client_id: "YOUR_CLIENT_ID",
    client_secret: "YOUR_CLIENT_SECRET"
  })
});

const { access_token, refresh_token } = await response.json();`}
                            language="javascript"
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Endpoints Reference */}
              <div id="endpoints">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Endpoints Reference
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our RESTful API provides comprehensive endpoints for managing contacts, messages, templates, and more.
                  </p>

                  <div className="space-y-3">
                    {endpoints.map((endpoint, index) => (
                      <Card key={index} className="rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span
                              className={`px-3 py-1 rounded-md text-sm font-medium ${
                                endpoint.method === "GET"
                                  ? "bg-[#14B8A6]/10 text-[#14B8A6]"
                                  : endpoint.method === "POST"
                                  ? "bg-[#7C3AED]/10 text-[#7C3AED]"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {endpoint.method}
                            </span>
                            <div>
                              <code className="text-[#0F172A] font-mono text-sm">{endpoint.path}</code>
                              <p className="text-gray-500 text-sm">{endpoint.description}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Example Endpoint Detail */}
                  <Card className="rounded-xl border border-gray-200 mt-6">
                    <CardHeader className="border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-md text-sm font-medium bg-[#7C3AED]/10 text-[#7C3AED]">
                          POST
                        </span>
                        <code className="text-[#0F172A] font-mono">/api/v1/messages</code>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-gray-600">Send a WhatsApp message to one or more contacts.</p>
                      
                      <h4 className="font-semibold text-[#0F172A]">Request Body</h4>
                      <CodeBlock
                        code={`{
  "to": ["+919876543210", "+919123456789"],
  "template_id": "payment_reminder_001",
  "parameters": {
    "customer_name": "John Doe",
    "invoice_number": "INV-2024-001",
    "amount": "₹15,000",
    "due_date": "2024-02-15"
  },
  "callback_url": "https://your-app.com/webhook/delivery"
}`}
                        language="json"
                      />

                      <h4 className="font-semibold text-[#0F172A]">Response</h4>
                      <CodeBlock
                        code={`{
  "success": true,
  "message_id": "msg_abc123xyz",
  "status": "queued",
  "created_at": "2024-01-15T10:30:00Z",
  "recipients": [
    { "phone": "+919876543210", "status": "queued" },
    { "phone": "+919123456789", "status": "queued" }
  ]
}`}
                        language="json"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* SDKs */}
              <div id="sdks">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    SDKs & Client Libraries
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sdks.map((sdk) => (
                    <Card key={sdk.name} className="rounded-xl shadow-lg hover:shadow-xl transition-all border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center">
                            <sdk.icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-[#0F172A]">{sdk.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{sdk.description}</p>
                        <div className="bg-[#F8FAFC] rounded-lg p-3 font-mono text-sm text-[#0F172A] mb-4">
                          {sdk.command}
                        </div>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={sdk.href}>
                            View Documentation
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Error Handling */}
              <div id="errors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Error Handling
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our API returns standard HTTP status codes along with detailed error messages to help you debug issues.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {errorCodes.map((error) => (
                      <Card key={error.code} className="rounded-xl border border-gray-200">
                        <CardContent className="p-4 flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-red-600 font-bold text-sm">{error.code}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0F172A]">{error.title}</h4>
                            <p className="text-gray-500 text-sm">{error.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="rounded-xl border border-gray-200 mt-6">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-[#0F172A] mb-4">Error Response Format</h4>
                      <CodeBlock
                        code={`{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The 'phone' field must be a valid phone number",
    "details": [
      {
        "field": "phone",
        "issue": "Invalid format",
        "value": "invalid-phone"
      }
    ],
    "request_id": "req_xyz789"
  }
}`}
                        language="json"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Rate Limits */}
              <div id="rate-limits">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0F172A]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Rate Limits
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our API has rate limits to ensure fair usage and platform stability. Rate limits vary by plan:
                  </p>

                  <Card className="rounded-xl border border-gray-200">
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Plan</th>
                              <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Requests/min</th>
                              <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Messages/day</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-100">
                              <td className="py-3 px-4">Starter</td>
                              <td className="py-3 px-4">60</td>
                              <td className="py-3 px-4">1,000</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-3 px-4">Professional</td>
                              <td className="py-3 px-4">300</td>
                              <td className="py-3 px-4">10,000</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-3 px-4">Enterprise</td>
                              <td className="py-3 px-4">1,000</td>
                              <td className="py-3 px-4">Unlimited</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something "
        highlight="Amazing?"
        subtitle="Get your API key and start integrating Ai Auto Soft with your applications today."
        primaryCta={{
          text: "Get API Key",
          href: "#get-api-key",
        }}
        secondaryCta={{
          text: "View Examples",
          href: "#examples",
        }}
      />

      <Footer />
    </div>
  );
}
