import { useState } from "react";
import { Button } from "../Admin/Pages/Administration/";

import { Card, CardContent } from "../Admin/Pages/Administration/card";
import { Input } from "../UserType/CreateForm";
import { Label } from "../Admin/Pages/Administration/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from " ../Admin/Pages/Administration/select";
import { Textarea } from ". ./Admin/Pages/Administration/textarea";
import { Upload } from 'lucide-react';

export default function CreateForm() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [availability, setAvailability] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [facilities, setFacilities] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [description, setDescription] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 mb-2">
              {image ? (
                <img
                  src={image}
                  alt="Turf preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
            <Label htmlFor="picture" className="text-sm text-gray-500 cursor-pointer">
              Upload turf picture
            </Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Turf Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter turf name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select value={availability} onChange={(e) => setAvailability(e.target.value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays Only</SelectItem>
                    <SelectItem value="weekends">Weekends Only</SelectItem>
                    <SelectItem value="all">All Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Hourly Rate</Label>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price per hour"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Turf Type</Label>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select turf type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="multi">Multi-purpose</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="facilities">Facilities</Label>
                <Input
                  id="facilities"
                  value={facilities}
                  onChange={(e) => setFacilities(e.target.value)}
                  placeholder="Available facilities"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1</Label>
                <Input
                  id="address1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Street address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address2">Address Line 2</Label>
                <Input
                  id="address2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="Area, City"
                />
              </div>
            </div>
          </div>

          {/* Full Width Fields */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write about your turf facilities, rules, and other important information"
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Add Turf
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}