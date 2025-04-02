import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Leaf, Pencil } from "lucide-react";

export default function InitiativePage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [supporters, setSupporters] = useState([]);
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "Erstes Treffen der Initiative",
      content: "Am 15. April haben wir uns zum ersten Mal in kleiner Runde getroffen und Ideen gesammelt. Die Stimmung war super – vielen Dank an alle, die dabei waren!",
    },
    {
      title: "Kontakt mit dem Bezirksausschuss",
      content: "Wir haben den Bezirksausschuss kontaktiert und hoffen bald auf eine Rückmeldung zu möglichen Begrünungsplänen.",
    },
  ]);

  const handleSupport = () => {
    if (name.trim() !== "") {
      setSupporters([...supporters, name]);
      setName("");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-4 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Leaf className="w-8 h-8 text-green-600" />
        Hofbrunnstraße wird grün!
      </motion.h1>

      <p className="text-lg mb-6">
        Wir setzen uns dafür ein, dass die Hofbrunnstraße in München durchgängig
        begrünt wird – mit Bäumen, Aufenthaltsqualität und mehr Lebensfreude.
        Ein Teil der Straße ist bereits eine Allee – unser Ziel ist es, den
        Alleecharakter auf die gesamte Straße auszudehnen.
      </p>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Warum Begrünung?</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Mehr Schatten & Hitzeschutz im Sommer</li>
            <li>Bessere Luftqualität & weniger Feinstaub</li>
            <li>Weniger Lärm, mehr Lebensqualität</li>
            <li>Stärkung des Mikroklimas & Klimaschutz</li>
            <li>Wertsteigerung der Umgebung</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Mitmachen!</h2>
          <p className="mb-4">
            Du wohnst in der Hofbrunnstraße oder Umgebung? Unterstütze die
            Initiative – mit deiner Stimme, deinem Engagement oder einfach durch
            dein Interesse. Gemeinsam gestalten wir unsere Straße grüner und
            lebenswerter.
          </p>
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleSupport}>
              Unterstützen
            </Button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-1">Unterstützer:innen:</h3>
            <ul className="list-disc list-inside text-sm">
              {supporters.map((supporter, index) => (
                <li key={index}>{supporter}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Pencil className="w-5 h-5 text-green-600" /> Neuigkeiten aus der Initiative
          </h2>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-700">{post.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-600 mt-8">
        Kontakt: info@hofbrunnstrasse-gruen.de
      </div>
    </div>
  );
}
