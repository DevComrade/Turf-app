

export default function FloatingLabelForm() {
  return (
    <form className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative z-0 w-full mb-5 group col-span-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group col-span-full">
          <input
            type="text"
            name="floating_address1"
            id="floating_address1"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_address1"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address 1
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group col-span-full">
          <input
            type="text"
            name="floating_address2"
            id="floating_address2"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_address2"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address 2 (optional)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_state"
            id="floating_state"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_state"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            State
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_zipcode"
            id="floating_zipcode"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_zipcode"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Zip Code
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company (Ex. Google)
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
}




// import { useState } from "react";
// import { Button } from "../Admin/Pages/Administration/";

// import { Card, CardContent } from "../Admin/Pages/Administration/card";
// import { Input } from "../UserType/CreateForm";
// import { Label } from "../Admin/Pages/Administration/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from " ../Admin/Pages/Administration/select";
// import { Textarea } from ". ./Admin/Pages/Administration/textarea";
// import { Upload } from 'lucide-react';

// export default function CreateForm() {
//   const [image, setImage] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [availability, setAvailability] = useState('');
//   const [price, setPrice] = useState('');
//   const [type, setType] = useState('');
//   const [facilities, setFacilities] = useState('');
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');
//   const [description, setDescription] = useState('');

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardContent className="p-6">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Image Upload */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="relative w-24 h-24 mb-2">
//               {image ? (
//                 <img
//                   src={image}
//                   alt="Turf preview"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
//                   <Upload className="w-8 h-8 text-gray-400" />
//                 </div>
//               )}
//             </div>
//             <Label htmlFor="picture" className="text-sm text-gray-500 cursor-pointer">
//               Upload turf picture
//             </Label>
//             <Input
//               id="picture"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageUpload}
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Turf Name</Label>
//                 <Input
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter turf name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Contact Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="availability">Availability</Label>
//                 <Select value={availability} onChange={(e) => setAvailability(e.target.value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select availability" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="weekdays">Weekdays Only</SelectItem>
//                     <SelectItem value="weekends">Weekends Only</SelectItem>
//                     <SelectItem value="all">All Days</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="price">Hourly Rate</Label>
//                 <Input
//                   id="price"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   placeholder="Enter price per hour"
//                 />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="type">Turf Type</Label>
//                 <Select value={type} onChange={(e) => setType(e.target.value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select turf type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="football">Football</SelectItem>
//                     <SelectItem value="cricket">Cricket</SelectItem>
//                     <SelectItem value="multi">Multi-purpose</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="facilities">Facilities</Label>
//                 <Input
//                   id="facilities"
//                   value={facilities}
//                   onChange={(e) => setFacilities(e.target.value)}
//                   placeholder="Available facilities"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="address1">Address Line 1</Label>
//                 <Input
//                   id="address1"
//                   value={address1}
//                   onChange={(e) => setAddress1(e.target.value)}
//                   placeholder="Street address"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="address2">Address Line 2</Label>
//                 <Input
//                   id="address2"
//                   value={address2}
//                   onChange={(e) => setAddress2(e.target.value)}
//                   placeholder="Area, City"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Full Width Fields */}
//           <div className="space-y-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Write about your turf facilities, rules, and other important information"
//               className="min-h-[120px]"
//             />
//           </div>

//           <Button type="submit" className="w-full md:w-auto">
//             Add Turf
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }