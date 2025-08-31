import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { UserPlus, Eye, EyeOff } from "lucide-react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agree) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    console.log("Signup Data:", formData);
    // Call backend API here
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-slate-700 bg-slate-900 text-white">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <UserPlus className="w-6 h-6 text-orange-500" /> Create Account
          </CardTitle>
          <CardDescription className="text-slate-400">
            Sign up to get started with{" "}
            <span className="font-semibold text-white">HeartBeat</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Username */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-white"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-white"
                required
              />
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-white rounded-lg px-3 py-2"
                required
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="doctor">Architect</option>
                <option value="doctor">Security Analyst</option>
              </select>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-white pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-slate-400 hover:text-slate-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2 relative">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-slate-800 border-slate-700 text-white pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-slate-400 hover:text-slate-200"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="agree"
                name="agree"
                checked={formData.agree}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agree: checked })
                }
              />
              <Label htmlFor="agree" className="text-slate-400">
                I agree to the{" "}
                <span className="text-orange-400 hover:underline cursor-pointer">
                  Terms & Conditions
                </span>
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
            >
              Sign Up
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-slate-400 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
